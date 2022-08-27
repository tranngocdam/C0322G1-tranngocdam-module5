package com.codegym.exam.repository;

import com.codegym.exam.model.BenhAn;
import com.codegym.exam.model.BenhNhan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IBenhAnRepository extends JpaRepository<BenhAn, String> {
    @Query(value = "select * from benh_an", nativeQuery = true)
    Page<BenhAn> findAllBenhAn(Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "insert into benh_an(ma_benh_an, bac_si, li_do, ngay_nhap_vien, ngay_ra_vien, phuong_phap, benh_nhan)", nativeQuery = true)
    void saveBenhAn(@Param("maBenhAn") String maBenhAn,
                    @Param("bacSi") String bacSi,
                    @Param("liDo") String liDo,
                    @Param("ngayNhapVien") String ngayNhapVien,
                    @Param("ngayRaVien") String ngayRaVien,
                    @Param("phuongPhap") String phuongPhap,
                    @Param("benhNhan") BenhNhan benhNhan);

    @Query(value = "select * from benh_an ba where ba.ma_benh_an =: ma_benh_an", nativeQuery = true)
    BenhAn findByBenhAn(@Param("maBenhAn") String maBenhAn);

    @Transactional
    @Modifying
    @Query(value = "delete from benh_an c where c.ma_benh_an =: ma_benh_an", nativeQuery = true)
    void deleteBenhAn(@Param("maBenhAn") String maBenhAn);

    @Query(value = "select * from benh_an where li_do like :li_do", nativeQuery = true)
    Page<BenhAn> findBenhAnByBenhNhan(@Param("liDo") String liDo, Pageable pageable);
}
