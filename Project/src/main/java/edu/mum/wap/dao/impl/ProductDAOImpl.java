package edu.mum.wap.dao.impl;

import edu.mum.wap.dao.MyDB;
import edu.mum.wap.dao.ProductDAO;
import edu.mum.wap.model.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProductDAOImpl implements ProductDAO {
    @Override
    public List<Product> findAllProducts() {
        return new ArrayList<>(MyDB.productList.values());
    }

    @Override
    public List<Product> findBestSellerProducts() {
        return new ArrayList<>(MyDB.productList.values());
    }

    @Override
    public Map<Integer, Product> getProductDB() {
        return MyDB.productList;
    }

    @Override
    public Product getProductDetailsById(int id) {
        return MyDB.productList.get(id);
    }
}
