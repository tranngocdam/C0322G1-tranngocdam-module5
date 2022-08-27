package com.codegym.exam.service;

import com.codegym.exam.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BenhAnService {
    Page<BenhAn> findAll(Pageable pageable);

    void save(BenhAn benhAn);

    BenhAn findByBenhAn(String maBenhAn);

    void deleteBenhAn(String maBenhAn);

    BenhAn editBenhAn(BenhAn benhAn);

    Page<BenhAn> findBenhAnByBenhNhan(String name, Pageable pageable);
}
