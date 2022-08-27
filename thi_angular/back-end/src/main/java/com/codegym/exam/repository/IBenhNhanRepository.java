package com.codegym.exam.repository;

import com.codegym.exam.model.BenhNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IBenhNhanRepository extends JpaRepository<BenhNhan, String> {
    @Query(value="select * from benh_nhan", nativeQuery=true)
    List<BenhNhan> findAllBenhNhan();
}
