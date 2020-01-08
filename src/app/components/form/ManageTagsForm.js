import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bulma-components";
import { TagsView } from "../TagsView";
import { SelectInput } from "./SelectInput";

const { Field, Input } = Form;

const colors = [
  "warning",
  "success",
  "primary",
  "dark",
  "info",
  "light",
  "danger"
];

export const ManageTagsForm = () => {
  const [tags, setTags] = useState([]);
  const fetchTags = () =>
    Promise.resolve([
      {
        value: "Kapitel 7",
        color: "success"
      },
      {
        value: "Kapitel 6",
        color: "warning"
      }
    ]);

  useEffect(() => {
    fetchTags().then(response => setTags(response));
  });
  if (!tags) return null;
  return (
    <>
      <Field multiline kind="group">
        <SelectInput
          options={colors.map(color => ({ title: color, value: color }))}
          label="Tag params"
        />
        <Input onChange={() => {}} value="" />
        <Button>Add</Button>
      </Field>
      <TagsView tags={tags} onRemove={() => {}} />
    </>
  );
};
