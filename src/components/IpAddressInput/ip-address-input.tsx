// React
import React, { ChangeEvent } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';

interface IpAddressInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// IP address input field
// TODO: This could be improved by replacing bootstrap's validation with an input mask
function IpAddressInput(props: IpAddressInputProps) {
  return (
    <>
      <Form.Label>IP Address</Form.Label>
      <Form.Control
        required
        name="ipAddress"
        type="text"
        onChange={props.onChange}
        value={props.value}
        pattern={'^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\\b){4}$'} // This pattern should match valid IP addresses
      />
    </>
  );
}

export default IpAddressInput;
