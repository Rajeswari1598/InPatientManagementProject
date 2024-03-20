package com.patient.billing.service.bean;

public class MedicationBean {

	private long id;
	private String medicationName;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMedicationName() {
		return medicationName;
	}

	public void setMedicationName(String medicationName) {
		this.medicationName = medicationName;
	}

	public MedicationBean(long id, String medicationName) {
		super();
		this.id = id;
		this.medicationName = medicationName;
	}

	public MedicationBean() {
		super();
	}

}
