package lk.spring.service.Impl;

import lk.spring.config.WebAppConfig;
import lk.spring.dto.CustomerDTO;
import lk.spring.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)
@Transactional
public class CustomerServiceImplTest {

    @Autowired
    CustomerService customerService;

    @Test
    void getAllCustomers() {
        //add multiple customers
        saveCustomers();

        List<CustomerDTO> allCustomers = customerService.getAllCustomers();
        for (CustomerDTO allCustomer : allCustomers) {
            System.out.println(allCustomer.toString());
        }

        //Test customer availability
        assertNotNull(allCustomers);

    }

    @Test
    void saveCustomers(){
        CustomerDTO customerDTO = new CustomerDTO("COO1", "Gaara", "0776890675", "@GMAIL", "GALLE", "SDASD", "8989", "SDFSD", "1223");
        CustomerDTO customerDTO2 = new CustomerDTO("COO2", "Beast", "0776890675", "@GMAIL", "GALLE", "SDASD", "8989", "SDFSD", "1223");
        customerService.saveCustomer(customerDTO);
        customerService.saveCustomer(customerDTO2);
    }
}
