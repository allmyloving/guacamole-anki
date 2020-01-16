import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bulma-components";
import { TagsView } from "../TagsView";
import { SelectInput } from "./SelectInput";
import { tagsApi } from "../../api";

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

export const ManageTagsForm = ({ withLoader }) => {
  const [tags, setTags] = useState([]);
  const [formValues, setFormValues] = useState({});

  const refreshTags = () =>
    tagsApi.fetchTags().then(response => setTags(response.tags));

  useEffect(() => {
    withLoader(() => refreshTags());
  }, []);

  const changeField = (value, fieldName) => {
    setFormValues({ ...formValues, [fieldName]: value });
  };

  const onTagCreate = () =>
    withLoader(() =>
      tagsApi
        .createTag(formValues)
        .then(refreshTags)
        .then(() => setFormValues({}))
    );

  if (!tags) return null;
  return (
    <>
      <Field multiline kind="group">
        <SelectInput
          extraStyles={{ marginRight: 10 }}
          options={colors.map(color => ({ title: color, value: color }))}
          label="Tag params"
          onChange={value => changeField(value, "color")}
          value={formValues.color}
        />
        <Input
          style={{ width: 200 }}
          onChange={event => changeField(event.target.value, "title")}
          value={formValues.title}
        />
        <Button onClick={onTagCreate}>Add</Button>
      </Field>
      <TagsView
        tags={tags}
        onRemove={({ id }) =>
          withLoader(() => tagsApi.deleteTag(id).then(refreshTags))}
      />
    </>
  );
};

