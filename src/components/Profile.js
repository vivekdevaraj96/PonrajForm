import { FormField, TextInput, Accordion, AccordionPanel } from "grommet";
import React, { useState } from "react";

const Profile = () => {
  const [formGroup, setForm] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    role: "",
    organization_name: "",
    phone_number: "",
    alternate_phone_number: "",
    residential_address: {
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    permanent_address: {
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    education: [
      {
        type: "",
        stream: "",
        passed_out_year: "",
        percentage: "",
      },
    ],
    skills: [
      {
        domain: "",
        skill: "",
        level: "",
      },
    ],
    certifications: [
      {
        domain: "",
        certificate_name: "",
        received_date: "",
        expiry_date: "",
      },
    ],
    experience: [
      {
        company_name: "",
        years_of_experience: "",
        role: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...formGroup, [name]: value });
  };

  const handle_residential_address = (e) => {
    const { name, value } = e.target;
    const updated_address = { ...formGroup.residential_address, [name]: value };
    setForm({ ...formGroup, residential_address: { ...updated_address } });
  };

  const handle_permanent_address = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    const updated_address = { ...formGroup.permanent_address, [name]: value };
    setForm({ ...formGroup, permanent_address: { ...updated_address } });
  };
  return (
    <div>
      <Accordion>
        <AccordionPanel label="Personal Details">
          <FormField label="First Name">
            <TextInput
              placeholder="First Name"
              name="first_name"
              value={formGroup.first_name}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
          <FormField label="Last Name">
            <TextInput
              placeholder="Last Name"
              name="last_name"
              value={formGroup.last_name}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
          <FormField label="User Name" name="user_name">
            <TextInput
              name="user_name"
              placeholder="User Name"
              value={formGroup.user_name}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
          <FormField label="Email">
            <TextInput
              placeholder="Email"
              name="email"
              value={formGroup.email}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
          <FormField label="Role" name="role">
            <TextInput
              placeholder="Role"
              name="role"
              value={formGroup.role}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
          <FormField label="Organization" name="organization_name">
            <TextInput
              placeholder="Organization"
              name="organization_name"
              value={formGroup.organization_name}
              onChange={(e) => handleChange(e)}
            />
          </FormField>
        </AccordionPanel>

        <AccordionPanel label="Contact Details">
          <div className="flexing">
            <div className="fourty">
              <FormField label="Phone Number">
                <TextInput
                  placeholder="Phone Number"
                  name="phone_number"
                  value={formGroup.phone_number}
                  onChange={(e) => handleChange(e)}
                />
              </FormField>
            </div>
            <div className="fourty">
              <FormField label="Alternate Phone Number">
                <TextInput
                  placeholder="Alternate Phone Number"
                  name="alternate_phone_number"
                  value={formGroup.alternate_phone_number}
                  onChange={(e) => handleChange(e)}
                />
              </FormField>
            </div>
          </div>
        </AccordionPanel>

        <AccordionPanel label="Address Details">
          <div className="flexing">
            <div className="fourty">
              <h4>Residential Address</h4>
              <FormField label="Address Line 1">
                <TextInput
                  placeholder="Address Line 1"
                  name="address_line_1"
                  value={formGroup.residential_address.address_line_1}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
              <FormField label="Address Line 2">
                <TextInput
                  placeholder="Address Line 3"
                  name="address_line_2"
                  value={formGroup.residential_address.address_line_2}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
              <FormField label="City">
                <TextInput
                  placeholder="City"
                  name="city"
                  value={formGroup.residential_address.city}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
              <FormField label="State">
                <TextInput
                  placeholder="State"
                  name="state"
                  value={formGroup.residential_address.state}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
              <FormField label="Country">
                <TextInput
                  placeholder="Country"
                  name="country"
                  value={formGroup.residential_address.country}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
              <FormField label="Pincode">
                <TextInput
                  placeholder="Pincode"
                  name="pincode"
                  value={formGroup.residential_address.pincode}
                  onChange={(e) => handle_residential_address(e)}
                />
              </FormField>
            </div>
            <div className="fourty">
              <h4>Permanent Address</h4>
              <FormField label="Address Line 1">
                <TextInput
                  placeholder="Address Line 1"
                  name="address_line_1"
                  value={formGroup.permanent_address.address_line_1}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
              <FormField label="Address Line 2">
                <TextInput
                  placeholder="Address Line 3"
                  name="address_line_2"
                  value={formGroup.permanent_address.address_line_2}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
              <FormField label="City">
                <TextInput
                  placeholder="City"
                  name="city"
                  value={formGroup.permanent_address.city}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
              <FormField label="State">
                <TextInput
                  placeholder="State"
                  name="state"
                  value={formGroup.permanent_address.state}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
              <FormField label="Country">
                <TextInput
                  placeholder="Country"
                  name="country"
                  value={formGroup.permanent_address.country}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
              <FormField label="Pincode">
                <TextInput
                  placeholder="Pincode"
                  name="pincode"
                  value={formGroup.permanent_address.pincode}
                  onChange={(e) => handle_permanent_address(e)}
                />
              </FormField>
            </div>
          </div>
        </AccordionPanel>
        <Education formGroup={formGroup} setForm={setForm} />
        <Skills formGroup={formGroup} setForm={setForm} />
        <Certifications formGroup={formGroup} setForm={setForm} />
        <Experience formGroup={formGroup} setForm={setForm} />
      </Accordion>
      <button onClick={() => console.log(formGroup)}>Submit</button>
    </div>
  );
};

const Education = ({ formGroup, setForm }) => {
  const [data, setData] = useState([
    { type: "", stream: "", passed_out_year: "", percentage: "" },
  ]);

  const handleClick = () => {
    setData([
      ...data,
      { type: "", stream: "", passed_out_year: "", percentage: "" },
    ]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
    setForm({ ...formGroup, education: onChangeVal });
    console.log(formGroup);
  };

  const handleDelete = (i) => {
    const deleteval = [...data];
    deleteval.splice(i, 1);
    setData(deleteval);
    setForm({ ...formGroup, education: deleteval });
  };

  return (
    <div>
      <AccordionPanel label="Education Details">
        {data.map((val, i) => (
          <div className="flexing" key={i}>
            <FormField label="Type" required>
              <TextInput
                placeholder="Type"
                name="type"
                value={val.type}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Stream" required>
              <TextInput
                placeholder="Stream"
                name="stream"
                value={val.stream}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Passed out Year" required>
              <TextInput
                placeholder="Passed out Year"
                name="passed_out_year"
                value={val.passed_out_year}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Percentage" required>
              <TextInput
                placeholder="Percentage"
                name="percentage"
                value={val.percentage}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            {data.length > 1 ? (
              <button onClick={() => handleDelete(i)}>Delete</button>
            ) : (
              <button onClick={() => handleDelete(i)} disabled={true}>
                Delete
              </button>
            )}
          </div>
        ))}
        {data.length < 5 ? (
          <button onClick={handleClick}>Add</button>
        ) : (
          <button onClick={handleClick} disabled={true}>
            Add
          </button>
        )}
      </AccordionPanel>
    </div>
  );
};

const Skills = ({ formGroup, setForm }) => {
  const [data, setData] = useState([
    { domain: "", skill: "", skill_level: "" },
  ]);

  const handleClick = () => {
    setData([...data, { domain: "", skill: "", skill_level: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
    setForm({ ...formGroup, skills: onChangeVal });
    console.log(formGroup);
  };

  const handleDelete = (i) => {
    const deleteval = [...data];
    deleteval.splice(i, 1);
    setData(deleteval);
    setForm({ ...formGroup, skills: deleteval });
  };

  return (
    <div>
      <AccordionPanel label="Skill Details">
        {data.map((val, i) => (
          <div className="flexing" key={i}>
            <FormField label="Domain" required>
              <TextInput
                placeholder="Domain"
                name="domain"
                value={val.domain}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Skill" required>
              <TextInput
                placeholder="Skill"
                name="skill"
                value={val.skill}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Skill Level" required>
              <TextInput
                placeholder="Skill Level"
                name="skill_level"
                value={val.skill_level}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            {data.length > 1 ? (
              <button onClick={() => handleDelete(i)}>Delete</button>
            ) : (
              <button onClick={() => handleDelete(i)} disabled={true}>
                Delete
              </button>
            )}
          </div>
        ))}
        {data.length < 15 ? (
          <button onClick={handleClick}>Add</button>
        ) : (
          <button onClick={handleClick} disabled={true}>
            Add
          </button>
        )}
      </AccordionPanel>
    </div>
  );
};

const Certifications = ({ formGroup, setForm }) => {
  const [data, setData] = useState([
    { domain: "", certificate_name: "", received_date: "", expiry_date: "" },
  ]);

  const handleClick = () => {
    setData([
      ...data,
      { domain: "", certificate_name: "", received_date: "", expiry_date: "" },
    ]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
    setForm({ ...formGroup, certifications: onChangeVal });
    console.log(formGroup);
  };

  const handleDelete = (i) => {
    const deleteval = [...data];
    deleteval.splice(i, 1);
    setData(deleteval);
    setForm({ ...formGroup, certifications: deleteval });
  };

  return (
    <div>
      <AccordionPanel label="Certifications">
        {data.map((val, i) => (
          <div className="flexing" key={i}>
            <FormField label="Domain" required>
              <TextInput
                placeholder="Domain"
                name="domain"
                value={val.domain}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Certificate Name" required>
              <TextInput
                placeholder="Certificate Name"
                name="certificate_name"
                value={val.certificate_name}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Received Date" required>
              <TextInput
                placeholder="Received Date"
                name="received_date"
                value={val.received_date}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Expiry Date" required>
              <TextInput
                placeholder="Expiry Date"
                name="expiry_date"
                value={val.expiry_date}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            {data.length > 1 ? (
              <button onClick={() => handleDelete(i)}>Delete</button>
            ) : (
              <button onClick={() => handleDelete(i)} disabled={true}>
                Delete
              </button>
            )}
          </div>
        ))}
        {data.length < 10 ? (
          <button onClick={handleClick}>Add</button>
        ) : (
          <button onClick={handleClick} disabled={true}>
            Add
          </button>
        )}
      </AccordionPanel>
    </div>
  );
};

const Experience = ({ formGroup, setForm }) => {
  const [data, setData] = useState([
    { company_name: "", years_of_experience: "", role: "" },
  ]);

  const handleClick = () => {
    setData([...data, { company_name: "", years_of_experience: "", role: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
    setForm({ ...formGroup, experience: onChangeVal });
    console.log(formGroup);
  };

  const handleDelete = (i) => {
    const deleteval = [...data];
    deleteval.splice(i, 1);
    setData(deleteval);
    setForm({ ...formGroup, experience: deleteval });
  };

  return (
    <div>
      <AccordionPanel label="Experience Details">
        {data.map((val, i) => (
          <div className="flexing" key={i}>
            <FormField label="Company Name" required>
              <TextInput
                placeholder="Company Name"
                name="company_name"
                value={val.company_name}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Years of Experience" required>
              <TextInput
                placeholder="Years of Experience"
                name="years_of_experience"
                value={val.years_of_experience}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            <FormField label="Role" required>
              <TextInput
                placeholder="Role"
                name="role"
                value={val.role}
                onChange={(e) => handleChange(e, i)}
              />
            </FormField>
            {data.length > 1 ? (
              <button onClick={() => handleDelete(i)}>Delete</button>
            ) : (
              <button onClick={() => handleDelete(i)} disabled={true}>
                Delete
              </button>
            )}
          </div>
        ))}
        {data.length < 10 ? (
          <button onClick={handleClick}>Add</button>
        ) : (
          <button onClick={handleClick} disabled={true}>
            Add
          </button>
        )}
      </AccordionPanel>
    </div>
  );
};

export default Profile;
