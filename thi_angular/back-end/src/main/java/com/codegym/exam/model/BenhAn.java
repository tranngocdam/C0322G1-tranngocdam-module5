package com.codegym.exam.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class BenhAn {
    @Id
    private String maBenhAn;
    private String ngayNhapVien;
    private String ngayRaVien;
    private String liDo;
    private String phuongPhap;
    private String bacSi;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "benh_nhan", referencedColumnName = "maBenhNhan")
    private BenhNhan benhNhan;

    public BenhAn() {
    }

    public BenhAn(String maBenhAn, String ngayNhapVien, String ngayRaVien, String liDo, String phuongPhap, String bacSi, BenhNhan benhNhan) {
        this.maBenhAn = maBenhAn;
        this.ngayNhapVien = ngayNhapVien;
        this.ngayRaVien = ngayRaVien;
        this.liDo = liDo;
        this.phuongPhap = phuongPhap;
        this.bacSi = bacSi;
        this.benhNhan = benhNhan;
    }

    public String getMaBenhAn() {
        return maBenhAn;
    }

    public void setMaBenhAn(String maBenhAn) {
        this.maBenhAn = maBenhAn;
    }

    public String getNgayNhapVien() {
        return ngayNhapVien;
    }

    public void setNgayNhapVien(String ngayNhapVien) {
        this.ngayNhapVien = ngayNhapVien;
    }

    public String getNgayRaVien() {
        return ngayRaVien;
    }

    public void setNgayRaVien(String ngayRaVien) {
        this.ngayRaVien = ngayRaVien;
    }

    public String getLiDo() {
        return liDo;
    }

    public void setLiDo(String liDo) {
        this.liDo = liDo;
    }

    public String getPhuongPhap() {
        return phuongPhap;
    }

    public void setPhuongPhap(String phuongPhap) {
        this.phuongPhap = phuongPhap;
    }

    public String getBacSi() {
        return bacSi;
    }

    public void setBacSi(String bacSi) {
        this.bacSi = bacSi;
    }

    public BenhNhan getBenhNhan() {
        return benhNhan;
    }

    public void setBenhNhan(BenhNhan benhNhan) {
        this.benhNhan = benhNhan;
    }
}
