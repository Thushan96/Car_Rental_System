package lk.spring.service.impl;

import lk.spring.dto.CustomerDTO;
import lk.spring.entity.Customer;
import lk.spring.repo.CustomerRepo;
import lk.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    ModelMapper mapper;

    @Autowired
    CustomerRepo customerRepo;


    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (!customerRepo.existsById(dto.getCustomerID())){
            customerRepo.save(mapper.map(dto, Customer.class));
        }else{
            throw new RuntimeException("Customer Already Exists! Try Again");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getCustomerID())){
            customerRepo.save(mapper.map(dto,Customer.class));
        }else{
            throw new RuntimeException("Customer Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (customerRepo.existsById(id)){
            customerRepo.deleteById(id);
        }else{
            throw new RuntimeException("Customer Not Exist..! Please Check ID");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (customerRepo.existsById(id)) {
            return mapper.map(customerRepo.findById(id).get(),CustomerDTO.class);
        }else{
            throw new RuntimeException("No Customer For " + id + " ..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return mapper.map(customerRepo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public CustomerDTO findLastCustomerById() {
        if (customerRepo.findTopByOrderByCustomerIDDesc()==null){
            return null;
        }else{
            return mapper.map(customerRepo.findTopByOrderByCustomerIDDesc(),CustomerDTO.class);
        }
    }

    @Override
    public int countByCustomerID() {
        return customerRepo.countByCustomerID();
    }


    @Override
    public boolean findByUserName(String userName) {
        Optional<Customer> byUserName = customerRepo.findByUserName(userName);
        return byUserName.isPresent();
    }

    @Override
    public CustomerDTO getCustomer(String userName) {
        Customer customer = customerRepo.getCustomerByUserName(userName);
        return mapper.map(customer,CustomerDTO.class);
    }

    @Override
    public boolean findByUserNameAndPassword(String userName, String password) {
        Optional<Customer> byUserNameAndPassword = customerRepo.findByUserNameAndPassword(userName, password);
        return byUserNameAndPassword.isPresent();
    }

}
