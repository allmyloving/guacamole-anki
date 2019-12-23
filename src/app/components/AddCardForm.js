import React from "react";
import { Form, Button } from "react-bulma-components";

const { Field, Label, Control, Input, Select } = Form;

export const AddCardForm = () => (
  <div>
    <Field>
      <Label>Original</Label>
      <Control>
        <Input placeholder="Word in original language" />
      </Control>
    </Field>
    <Field>
      <Label>Language</Label>
      <Control>
        <Select>
          <option>Deutsch</option>
          <option>English</option>
        </Select>
      </Control>
    </Field>
    <Field kind="group">
      <Control>
        <Button type="primary">Submit</Button>
      </Control>
      <Control>
        <Button color="link">Cancel</Button>
      </Control>
    </Field>
  </div>
);
