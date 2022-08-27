package com.codegym.exam.controller;

import com.codegym.exam.model.BenhAn;
import com.codegym.exam.service.BenhAnService;
import com.codegym.exam.service.BenhNhanService;
import com.codegym.exam.service.impl.IBenhAnServiceImpl;
import com.codegym.exam.service.impl.IBenhNhanServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/benhan")
@CrossOrigin
public class BenhAnRestController {
    @Autowired
    private BenhAnService benhAnService;
    @Autowired
    private BenhNhanService benhNhanService;

    @GetMapping("")
    public ResponseEntity<Page<BenhAn>> findAllBenhAn(Pageable pageable) {
        Page<BenhAn> benhAnPage = benhAnService.findAll(pageable);
        if (benhAnPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(benhAnPage, HttpStatus.OK);
    }

    @GetMapping("/{maBenhAn}")
    public ResponseEntity<BenhAn> findByMaBenhAn(@PathVariable String maBenhAn) {
        BenhAn benhAn = benhAnService.findByBenhAn(maBenhAn);
        return new ResponseEntity<>(benhAn, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BenhAn> saveBenhAn(@RequestBody BenhAn benhAn) {
        benhAnService.save(benhAn);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    @PatchMapping("/editBenhAn")
    public ResponseEntity<BenhAn> editBenhAn(@RequestBody BenhAn benhAn){
       benhAnService.editBenhAn(benhAn);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/benhan")
    public ResponseEntity<BenhAn> deleteBenhAn(@RequestParam String maBenhAn){
        benhAnService.deleteBenhAn(maBenhAn);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
