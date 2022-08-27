package com.codegym.exam.service.impl;

import com.codegym.exam.model.BenhAn;
import com.codegym.exam.repository.IBenhAnRepository;
import com.codegym.exam.service.BenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IBenhAnServiceImpl implements BenhAnService {
    @Autowired
    private IBenhAnRepository iBenhAnRepository;

    @Override
    public Page<BenhAn> findAll(Pageable pageable) {
        return iBenhAnRepository.findAllBenhAn(pageable);
    }

    @Override
    public void save(BenhAn benhAn) {
        iBenhAnRepository.saveBenhAn(benhAn.getMaBenhAn(), benhAn.getBacSi(), benhAn.getLiDo(), benhAn.getNgayNhapVien(), benhAn.getNgayRaVien(),
                benhAn.getPhuongPhap(), benhAn.getBenhNhan());
    }

    @Override
    public BenhAn findByBenhAn(String maBenhAn) {
        return iBenhAnRepository.findByBenhAn(maBenhAn);
    }

    @Override
    public void deleteBenhAn(String maBenhAn) {
        iBenhAnRepository.deleteBenhAn(maBenhAn);
    }

    @Override
    public BenhAn editBenhAn(BenhAn benhAn) {
        return iBenhAnRepository.save(benhAn);
    }

    @Override
    public Page<BenhAn> findBenhAnByBenhNhan(String name, Pageable pageable) {
        return iBenhAnRepository.findBenhAnByBenhNhan("%"+ name + "%", pageable);
    }
}
