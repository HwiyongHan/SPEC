package com.seb_45_main_021.unkwon.portfolio.service;

import com.seb_45_main_021.unkwon.exception.BusinessLogicException;
import com.seb_45_main_021.unkwon.exception.ExceptionCode;
import com.seb_45_main_021.unkwon.portfolio.entity.Portfolio;
import com.seb_45_main_021.unkwon.portfolio.repository.PortFolioRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.sound.sampled.Port;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Optional;

@Service
@Transactional
public class PortFolioService {
    private final PortFolioRepository portFolioRepository;

    public PortFolioService(PortFolioRepository portFolioRepository) {
        this.portFolioRepository = portFolioRepository;
    }

    public Portfolio findByPortfolioId(long portfolioId){
        Optional<Portfolio> optionalPortFolio = portFolioRepository.findById(portfolioId);
        Portfolio findPortfolio = optionalPortFolio
                .orElseThrow(()->new BusinessLogicException(ExceptionCode.PORTFOLIO_NOT_FOUND));

        return findPortfolio;
    }

    public Portfolio createPortfolio(Portfolio portFolio){

        return portFolioRepository.save(portFolio);
    }

    public Portfolio updatePortfolio(Portfolio portFolio){

        Portfolio findPortfolio = findByPortfolioId(portFolio.getPortfolioId());

        Optional.ofNullable(portFolio.getTitle())
                .ifPresent(title -> findPortfolio.setTitle(title));
        Optional.ofNullable(portFolio.getContent())
                .ifPresent(content -> findPortfolio.setContent(content));
        Optional.ofNullable(portFolio.getTags())
                .ifPresent(tags -> findPortfolio.setTags(tags));
        Optional.ofNullable(portFolio.getLang())
                .ifPresent(lang-> findPortfolio.setLang(lang));

        return portFolioRepository.save(findPortfolio);
    }

    public Portfolio findPortfolio(long portfolioId){
        Portfolio findPortfolio = findByPortfolioId(portfolioId);

        findPortfolio.setView(findPortfolio.getView() + 1);

        return findPortfolio;
    }

    public Page<Portfolio> findPortfolios(int page, int size){

        return portFolioRepository.findAll(
                PageRequest.of(page, size, Sort.by("portfolioId").descending()));
    }

    public Page<Portfolio> findTagPortfolio(int page, int size, String[] tags) { //검색 처리

        Arrays.sort(tags);

        StringBuilder likeQueryBuilder = new StringBuilder("");

        for (int i = 0; i < tags.length; i++) {
            String temp = "%" + tags[i] + "%";
            likeQueryBuilder.append(temp);
        }

        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.DESC, "created_at"));
        Page<Portfolio> searchPortfolioTagList = portFolioRepository.getSearchPortfolioList(likeQueryBuilder.toString(), pageRequest);

        System.out.println();
        return searchPortfolioTagList;
    }

    public Page<Portfolio> findLangPortfolio(int page, int size, String[] lang) { //검색 처리

        Arrays.sort(lang);

        StringBuilder likeQueryBuilder = new StringBuilder("");

        for (int i = 0; i < lang.length; i++) {
            String temp = "%" + lang[i] + "%";
            likeQueryBuilder.append(temp);
        }

        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.DESC, "created_at"));
        Page<Portfolio> searchPortfolioLangList = portFolioRepository.getSearchPortfolioList1(likeQueryBuilder.toString(), pageRequest);

        System.out.println();
        return searchPortfolioLangList;
    }
    public Page<Portfolio> findWeeklyPopularPortfolios(Pageable pageRequest) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime oneWeekAgo = now.minus(1, ChronoUnit.WEEKS);

        return portFolioRepository.findByHeartAtBetween(oneWeekAgo, now, pageRequest);
    }


    public Page<Portfolio> findPortfoliosView(int page, int size){

        return portFolioRepository.findAll(
                PageRequest.of(page, size, Sort.by("view").descending()));
    }

    public void deletePortfolio(long portfolioId){
        Portfolio portfolio = findByPortfolioId(portfolioId);

        portFolioRepository.delete(portfolio);
    }
}
