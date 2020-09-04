package com.erp.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.erp.springboot.model.Signup;

@Repository
public interface SignupRepository extends JpaRepository<Signup, Long>{

	Signup findByemailId(String email);
}
