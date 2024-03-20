package com.admin.service.implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.admin.bean.WardBean;
import com.admin.constants.CommonConstants;
import com.admin.entity.Department;
import com.admin.entity.Ward;
import com.admin.exception.RecordNotFoundException;
import com.admin.exception.WardAlreadyExistsException;
import com.admin.repository.WardRepository;
import com.admin.service.WardService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class WardServiceImpl implements WardService {
	@Autowired
	private WardRepository wardRepository;
	ObjectMapper objectMapper = new ObjectMapper();
	private static Logger log = LoggerFactory.getLogger(BedAllocationServiceImpl.class.getSimpleName());

	@Override
	public WardBean save(WardBean wardBean) {
		try {
			Ward ward1 = wardRepository.getByNameAndDepartmentId_Name(wardBean.getName(),
					wardBean.getDepartmentId().getName());
			if (ward1 == null) {
				Ward ward = new Ward();
				wardBean.setStatus(CommonConstants.Active);
				wardBean.setAvailability(wardBean.getCapacity());
				beanToEntity(ward, wardBean);
				wardRepository.save(ward);
			} else {
				throw new WardAlreadyExistsException("That ward already exists");
			}
			return wardBean;
		} catch (WardAlreadyExistsException exception) {
			log.error("Ward already exists", exception);
			throw exception;
		} catch (Exception exception) {
			log.error("An unexpected error occurred while saving ward", exception);
			throw exception;
		}
	}

	private void beanToEntity(Ward ward, WardBean wardBean) {
		ward = objectMapper.convertValue(wardBean, Ward.class);
	}

	private void entityToBean(WardBean wardBean, Ward ward) {
		wardBean = objectMapper.convertValue(ward, WardBean.class);
	}

	public WardBean getById(Long id) {
		try {
			WardBean wardBean = new WardBean();
			Ward ward = wardRepository.findById(id)
					.orElseThrow(() -> new RecordNotFoundException("No Record Found with given id"));
			entityToBean(wardBean, ward);
			return wardBean;
		} catch (RecordNotFoundException exception) {
			log.error("Record not found for id: " + id, exception);
			throw exception;
		} catch (Exception exception) {
			log.error("error fetching ward by id: " + id, exception);
			throw exception;
		}
	}

	@Override
	public void delete(Long id) {
		try {
			wardRepository.deleteById(id);
		} catch (Exception exception) {
			log.error("error deleting ward with id: " + id, exception);
			throw exception;
		}

	}

	@Override
	public List<WardBean> getAll() {
		try {
			List<Ward> entityList = wardRepository.findAll();
			List<WardBean> beanList = new ArrayList<>();
			entityToBean(entityList, beanList);
			return beanList;
		} catch (Exception exception) {
			log.info(" error  fetching all wards", exception);
			throw exception;
		}
	}

	private void entityToBean(List<Ward> entityList, List<WardBean> beanList) {
		for (Ward ward : entityList) {
			WardBean wardBean = new WardBean();
			entityToBean(wardBean, ward);
			beanList.add(wardBean);
		}

	}

	@Override
	public void update(WardBean wardBean) {
		try {
			Optional<Ward> optional = wardRepository.findById(wardBean.getId());
			if (optional.isPresent()) {
				Ward ward = optional.get();
				ward.setId(wardBean.getId());
				ward.setName(wardBean.getName());
				ward.setCapacity(wardBean.getCapacity());
				ward.setAvailability(wardBean.getAvailability());
				ward.setStatus(wardBean.getStatus());
				Department Department = ward.getDepartmentId();

				ward.setDepartmentId(Department);
				wardRepository.save(ward);

			} else {
				throw new RecordNotFoundException("not found in details");
			}

		} catch (Exception exception) {
			log.info("error while updating ward status", exception);
			throw exception;
		}

	}

	@Override
	public List<Ward> findByDepartmentId(Long departmentId) {
		// TODO Auto-generated method stub
		try {
			log.info("Fetchind wards by deparment id");
			return wardRepository.findByDepartmentId_Id(departmentId);
		} catch (Exception exception) {
			log.info("error while fetching wards by department id", exception);
			throw exception;
		}
	}

	@Override
	public void updateStatus(Ward ward) {

		if (ward.getStatus().equalsIgnoreCase(CommonConstants.Active)) {
			ward.setStatus(CommonConstants.InActive);
		} else {
			ward.setStatus(CommonConstants.Active);
		}
		wardRepository.save(ward);

	}

}
