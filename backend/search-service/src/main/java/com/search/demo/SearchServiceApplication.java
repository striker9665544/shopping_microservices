package com.search.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(
 exclude = {
     DataSourceAutoConfiguration.class, 
     DataSourceTransactionManagerAutoConfiguration.class, 
     HibernateJpaAutoConfiguration.class,
     JpaRepositoriesAutoConfiguration.class
 }
)
public class SearchServiceApplication {

 public static void main(String[] args) {
     SpringApplication.run(SearchServiceApplication.class, args);
 }

}
