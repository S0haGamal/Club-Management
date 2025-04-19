import React from 'react';
import Sidebar from '../Components/Sidebar';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import InfoIcon from '@mui/icons-material/Info';
import { addUserInDB } from '../Components/Store/Store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addUserInDB(data))
      .then(() => {
        alert('Subscription added successfully!');
        navigate('/subscription'); 
      })
      .catch((error) => {
        console.error('Error adding subscription:', error);
        alert('Failed to add subscription. Please try again.');
      });
  };

  return (
    <div className="d-flex flex-row" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="col-3" >
        <Sidebar />
      </div>
      <div className="col-9 p-4">
        <h1 className="mb-4 text-primary">Add Subscription</h1>
        <div className="card shadow-sm p-4">
          <Form className="SubscriptionForm" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'name is required',
                  },
                })}
              />
              {errors.name?.message && (
                <p className="text-danger d-flex align-items-center">
                  <InfoIcon fontSize="14px" />
                  {errors.name?.message}
                </p>
              )}
            </Form.Group>

            {/* Subscription Type */}
            <Form.Group className="mb-3">
              <Form.Select
                {...register('type', {
                  required: {
                    value: true,
                    message: 'Subscription Type is required',
                  },
                })}
              >
                <option value="">Select Subscription Type</option>
                <option value="Monthly">Monthly</option>
                <option value="Annual">Annual</option>
              </Form.Select>
              {errors.type?.message && (
                <p className="text-danger d-flex align-items-center">
                  <InfoIcon fontSize="14px" />
                  {errors.type?.message}
                </p>
              )}
            </Form.Group>

            {/* Start Date */}
            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                {...register('startDate', {
                  required: {
                    value: true,
                    message: 'Start Date is required',
                  },
                })}
              />
              {errors.startDate?.message && (
                <p className="text-danger d-flex align-items-center">
                  <InfoIcon fontSize="14px" />
                  {errors.startDate?.message}
                </p>
              )}
            </Form.Group>

            {/* End Date */}
            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                {...register('endDate', {
                  required: {
                    value: true,
                    message: 'End Date is required',
                  },
                })}
              />
              {errors.endDate?.message && (
                <p className="text-danger d-flex align-items-center">
                  <InfoIcon fontSize="14px" />
                  {errors.endDate?.message}
                </p>
              )}
            </Form.Group>

            {/* Paid */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Paid"
                {...register('paid')}
              />
            </Form.Group>

            {/* Notes */}
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Notes"
                {...register('Notes')}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;