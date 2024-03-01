import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeForm = () => {
  //input fields states
  const [nationalId, setNationalId] = useState('');
  const [passportId, setPassportId] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [tinNumber, setTinNumber] = useState('');
  const [regDate, setRegDate] = useState('');
  const [businessProvince, setBusinessProvince] = useState('');
  const [purpose, setPurpose] = useState('');
  const [category, setCategory] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [province, setProvince] = useState('');
  const [otherpurpose, setOtherpurpose] = useState('');

  const [loading, setLoading] = useState(false);

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    //check if all fields are provided
    // if (!nationalId || !telephone || !email || !businessType || !companyName || !tinNumber || !regDate || !businessProvince || !purpose || !category || !weight || !unit || !quantity || !description || !citizenship || !province || !otherpurpose) {
    //   toast.error('Please provide all the required fields');
    //   return;
    // }

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/registerDetails`, {
        nationalId,
        telephone,
        email,
        businessType,
        companyName,
        tinNumber,
        regDate,
        businessProvince,
        purpose,
        category,
        weight,
        unit,
        quantity,
        description,
        citizenship,
        province,
        otherpurpose,
        passportId
      });
        toast.success(response.data.message || 'Details registered successfully');
        //clear all input fields
        setNationalId('');
        setTelephone('');
        setEmail('');
        setBusinessType('');
        setCompanyName('');
        setTinNumber('');
        setRegDate('');
        setBusinessProvince('');
        setPurpose('');
        setCategory('');
        setWeight('');
        setUnit('');
        setQuantity('');
        setDescription('');
        setCitizenship('');
        setProvince('');
        setOtherpurpose('');
        setPassportId('');
     
    } catch (error) {
      toast.error(error?.response?.data?.message || 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <div className="pb-12">
  <ToastContainer />

  <form onSubmit={handleSubmit} className="">

    {/* part one */}
    <div className="mx-auto w-[60vw] border border-blue-600 rounded-lg mb-8">
    <div className='bg-blue-100 p-3 w-full h-full px-8 border border-b-blue-600'>
      <h1 className="text-blue-600 text-lg">Business Owner Details</h1>
    </div>
  <div className="flex flex-col border w-full md:mx-auto px-3 md:px-8 pt-5">
      <h1 className="text-black font-bold mb-4 text-md">Business Owner Details</h1>

      <div className="mb-6 flex flex-col">
        <label className='text-sm'>Applicant citizenship <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setCitizenship(e.target.value)} value={citizenship} className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select citizenship</option>
          <option value="Rwandan">Rwandan</option>
          <option value="Foreigner">Foreigner</option>
        </select>
      </div>

      {citizenship === 'Rwandan' && (<div className="mb-6 flex flex-col">
        <label className='text-sm'>Identification document number <span className="text-red-600">*</span></label>
        <input
          type="text"
          className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter Identification document number"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
      </div>)}

      {citizenship === 'Foreigner' && (<div className="mb-6 flex flex-col">
        <label className='text-sm'>Passport number<span className="text-red-600">*</span></label>
        <input
          type="text"
          className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter passport number"
          value={passportId}
          onChange={(e) => setPassportId(e.target.value)}
        />
      </div>)}

      <div className='flex '>
      <div className="mb-6 flex flex-col mr-4 w-[40%]">
      <label className='text-sm'>Phone number</label>
        <input
          type="text"
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Phone number"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>

      <div className="mb-6 flex flex-col w-[40%]">
      <label className='text-sm'>Email address</label>
        <input
          type="email"
          className="px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter an email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      </div>

      <div className="mb-6 flex flex-col">
      <h1 className="text-black mb-4 text-md font-bold">Business Owner Adress</h1>
      <label className='text-sm'>Province <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setProvince(e.target.value)} value={province} className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select province</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>
  </div>
  </div>
  
    {/* part two */}
    <div className="mx-auto w-[60vw] border border-blue-600 rounded-lg mb-8">
    <div className='bg-blue-100 p-3 w-full h-full px-8 border border-b-blue-600'>
      <h1 className="text-blue-600 text-lg">Business Details</h1>
    </div>
  <div className="flex flex-col border w-full md:mx-auto px-3 md:px-8 pt-5">
      <h1 className="text-black font-bold mb-4 text-md">Business Details</h1>

      <div className='flex '>
      <div className="mb-6 flex flex-col mr-4 w-[40%]">
        <label className='text-sm'>Business Type <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setBusinessType(e.target.value)} value={businessType} className="px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select business type</option>
          <option value="Retailer">Retailer</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Manufacturer">Manufacturer</option>
        </select>
      </div>
      <div className="mb-6 flex flex-col w-[40%]">
      <label className='text-sm'>Company name <span className="text-red-600">*</span></label>
        <input
          type="text"
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      </div>

      <div className='flex '>
      <div className="mb-6 flex flex-col mr-4 w-[40%]">
      <label className='text-sm'>TIN Number <span className="text-red-600">*</span></label>
        <input
          type="text"
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter TIN Number"
          min={9}
          max={9}
          value={tinNumber}
          onChange={(e) => setTinNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-6 flex flex-col w-[40%]">
      <label className='text-sm'>Registration date <span className="text-red-600">*</span></label>
        <input
          type="date"
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Choose Date"
          value={regDate}
          onChange={(e) => setRegDate(e.target.value)}
          required
        />
      </div>
      </div>

      <div className="mb-6 flex flex-col">
      <h1 className="text-black mb-4 text-md font-bold">Business Adress</h1>
      <label className='text-sm'>Province <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setBusinessProvince(e.target.value)} value={businessProvince} className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select province</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>

  </div>
  </div>

    {/* part three */}
    <div className="mx-auto w-[60vw] border border-blue-600 rounded-lg mb-8">
    <div className='bg-blue-100 p-3 w-full h-full px-8 border border-b-blue-600'>
      <h1 className="text-blue-600 text-lg">Product Information</h1>
    </div>
  <div className="flex flex-col border w-full md:mx-auto px-3 md:px-8 pt-5">
      <h1 className="text-black font-bold mb-4 text-md">Importation Details</h1>

      <div className="mb-6 flex flex-col">
        <label className='text-sm'>Purpose of Importation <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setPurpose(e.target.value)} value={purpose} className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Enter the purpose of importation</option>
          <option value="direct">Direct sale</option>
          <option value="personal">Personal use</option>
          <option value="trial">Trial use</option>
          <option value="other">Other</option>
        </select>
      </div>

      {purpose === 'other' && (<div className="mb-6 flex flex-col">
        <label className='text-sm'>Specify purpose of importation <span className="text-red-600">*</span></label>
        <input
          type="text"
          className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter purpose of importation"
          value={otherpurpose}
          onChange={(e) => setOtherpurpose(e.target.value)}
        />
      </div>)}

    <h1 className="text-black font-bold mb-4 text-md">Product Details</h1>
    <div className="mb-6 flex flex-col">
        <label className='text-sm'>Product category <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setCategory(e.target.value)} value={category} className="w-[40%] px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select product category</option>
          <option value="general">General Purpose</option>
          <option value="construction">Construction materials</option>
          <option value="chemicals">Chemicals</option>
        </select>
      </div>

      <div className="mb-6 flex flex-col w-[40%]">
      <label className='text-sm'>Weight(kg)</label>
        <input
          type="text"
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Weight(kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className='flex '>
      <div className="mb-6 flex flex-col mr-4 w-[40%]">
        <label className='text-sm'>Unit of measurement <span className="text-red-600">*</span></label>
        <select required onChange={(e) => setUnit(e.target.value)} value={unit} className="px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm">
          <option disabled value="" className='text-gray-500'>Select unit of measurement</option>
          <option value="kgs">Kgs</option>
          <option value="tonnes">Tonnes</option>
        </select>
      </div>
      <div className="mb-6 flex flex-col w-[40%]">
      <label className='text-sm'>Quantity of product <span className="text-red-600">*</span></label>
        <input
          type="number"
          min={1}
          className=" px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
          placeholder="Enter quantity of product"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      </div>

      <div className="mb-6 flex flex-col w-[82%] h-36">
      <label className='text-sm'>Description of products <span className="text-red-600">*</span></label>
      <textarea
        className="h-full px-4 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-black text-sm"
        placeholder="Enter product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      </div>
  </div>
  </div>

    <button
        type="submit"
        className="w-[60vw] mb-6 flex justify-center mx-auto text-sm px-4 py-3 text-white bg-blue-600 rounded-3xl hover:bg-blue-700"
        // style={{ backgroundColor: '#092468' }}
        disabled={loading}
      >
        {loading ? 'Registering Details...' : 'Register Details'}
      </button>
  </form>
</div>

  );
};

export default EmployeeForm;
