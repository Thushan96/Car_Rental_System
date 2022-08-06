package lk.spring.service.impl;

import lk.spring.dto.PaymentDTO;
import lk.spring.entity.Payment;
import lk.spring.repo.PaymentRepo;
import lk.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    ModelMapper mapper;

    @Autowired
    PaymentRepo paymentRepo;
    @Override
    public void savePayment(PaymentDTO dto) {
        if (!paymentRepo.existsById(dto.getPaymentID())){
            paymentRepo.save(mapper.map(dto, Payment.class));
        }else{
            throw new RuntimeException("Already Payed!");
        }
    }

    @Override
    public void deletePayment(String id) {
        if (paymentRepo.existsById(id)){
            paymentRepo.deleteById(id);
        }else{
            throw new RuntimeException("Payment Not Exist..! Please Check ID");
        }
    }

    @Override
    public void updatePayment(PaymentDTO dto) {
        if (paymentRepo.existsById(dto.getPaymentID())){
            paymentRepo.save(mapper.map(dto,Payment.class));
        }else{
            throw new RuntimeException("Payment Not Exist..! Please Check ID");
        }
    }

    @Override
    public PaymentDTO searchPayment(String id) {
        if (paymentRepo.existsById(id)) {
            return mapper.map(paymentRepo.findById(id).get(), PaymentDTO.class);
        }else{
            throw new RuntimeException("No Payment made For " + id + " ..!");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        return mapper.map(paymentRepo.findAll(), new TypeToken<List<PaymentDTO>>() {
        }.getType());
    }

    @Override
    public List<PaymentDTO> getPaymentCid(String custId) {
        return mapper.map(paymentRepo.getPaymentCid(custId),new TypeToken<ArrayList<PaymentDTO>>(){}.getType());
    }

    @Override
    public PaymentDTO findLastPaymentById() {
        if (paymentRepo.findTopByOrderByPaymentIDDesc()==null){
            return null;
        }else{
            return mapper.map(paymentRepo.findTopByOrderByPaymentIDDesc(),PaymentDTO.class);
        }
    }
}
