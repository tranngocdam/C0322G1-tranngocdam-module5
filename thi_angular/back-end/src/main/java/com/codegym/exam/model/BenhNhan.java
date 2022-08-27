package com.codegym.exam.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class BenhNhan {
    @Id
    private String maBenhNhan;
    private String tenBenhNhan;
    @JsonBackReference
    @OneToMany(mappedBy = "benhNhan")
    private List<BenhAn> benhAnList;

    public BenhNhan() {
    }

    public BenhNhan(String maBenhNhan, String tenBenhNhan, List<BenhAn> benhAnList) {
        this.maBenhNhan = maBenhNhan;
        this.tenBenhNhan = tenBenhNhan;
        this.benhAnList = benhAnList;
    }

    public String getMaBenhNhan() {
        return maBenhNhan;
    }

    public void setMaBenhNhan(String maBenhNhan) {
        this.maBenhNhan = maBenhNhan;
    }

    public String getTenBenhNhan() {
        return tenBenhNhan;
    }

    public void setTenBenhNhan(String tenBenhNhan) {
        this.tenBenhNhan = tenBenhNhan;
    }

    public List<BenhAn> getBenhAnList() {
        return benhAnList;
    }

    public void setBenhAnList(List<BenhAn> benhAnList) {
        this.benhAnList = benhAnList;
    }
}
