package com.codegym.exam.service.impl;

import com.codegym.exam.model.BenhNhan;
import com.codegym.exam.repository.IBenhNhanRepository;
import com.codegym.exam.service.BenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IBenhNhanServiceImpl implements BenhNhanService {
    @Autowired
    private IBenhNhanRepository iBenhNhanRepository;
    @Override
    public List<BenhNhan> findAll() {
        return iBenhNhanRepository.findAllBenhNhan();
    }
}
