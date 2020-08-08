import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// const divStyle = {
//   padding: 50,
//   dispaly: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

export default function Login() {
  return (
    <div>
      <Form inline className="container mt-3">
        <div>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
            />
          </FormGroup>
        </div>

        <div>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
            />
          </FormGroup>
        </div>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
