// React
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Internal
import { IpAddressInput, GridCard } from 'components';

interface IpAddressFormProps {
  onSubmit: (ipAddress: string) => void;
}

// Add location by IP address card
function IpAddressCard(props: IpAddressFormProps) {
  const [validated, setValidated] = useState<boolean>(false);
  const [ipAddress, setIpAddress] = useState<string>('');

  const handleIpInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setIpAddress(target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    if (form.checkValidity()) {
      props.onSubmit(ipAddress);
      // Reset the form and validation messages
      setIpAddress('');
      setValidated(false);
    } else {
      // Show validation messages
      setValidated(true);
    }
  };

  return (
    <GridCard title="Add Location">
      <Form
        className="mt-2"
        noValidate
        validated={validated}
        onSubmit={onFormSubmit}
      >
        <Form.Group>
          <IpAddressInput value={ipAddress} onChange={handleIpInputChange} />
        </Form.Group>
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </GridCard>
  );
}

export default IpAddressCard;
