package lk.spring.service;

import lk.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO dto);
    void updateCustomer(CustomerDTO dto);
    void deleteCustomer(String id);
    CustomerDTO searchCustomer(String id);
    List<CustomerDTO> getAllCustomers();
    CustomerDTO findLastCustomerById();

    boolean findByUserNameAndPassword(String userName, String password);

    boolean findByUserName(String userName);

    CustomerDTO getCustomer(String userName);
}
