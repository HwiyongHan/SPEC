package com.seb_45_main_021.unkwon.heart.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seb_45_main_021.unkwon.member.entity.Member;
import com.seb_45_main_021.unkwon.portfolio.entity.PortFolio;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioHeart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long heartId;

    private boolean status = false;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt; // LocalDateTime으로 변경

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PORTFOLIO_ID")
    @JsonBackReference
    private PortFolio portFolio;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    public PortfolioHeart(boolean status,
                          Member member,
                          PortFolio portFolio) {
        this.status = status;
        this.member = member;
        this.portFolio = portFolio;
    }
}
