import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "react-bulma-components";

import { AddCardForm, ManageTagsForm } from "./form";
import { Modal } from "./Modal";
import { CardsContainer } from "./CardsContainer";
import { languages } from "../../data/supportedLanguages";
import { createCard, updateCard, deleteCard, tagsApi } from "../api";
import { loadCards } from "../store/actions";
import { TrainingContainer } from "./training";
import { Header } from "./Header";

const { Tab } = Tabs;

export const MainContainer = ({ setLoading }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isTagsModalVisible, setTagsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState(false);
  const [initialFormData, setInitialFormData] = useState();
  const [isTrainMode, setTrainMode] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [tags, setTags] = useState([]);

  const cards = useSelector(state => state.cards.cards);
  const dispatch = useDispatch();

  const withLoader = action => {
    setLoading(true);
    action()
      .then(() => tagsApi.fetchTags().then(response => setTags(response.tags)))
      .then(() => dispatch(loadCards()))
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    withLoader(() => Promise.resolve());
  }, []);

  const createOrUpdateCard = newCard =>
    newCard.id ? updateCard(newCard) : createCard(newCard);

  const onSave = newCard => {
    withLoader(() => {
      setFormVisible(false);
      return createOrUpdateCard(newCard);
    });
  };
  const onDelete = id => {
    withLoader(() => deleteCard(id));
  };
  const openEditModal = data => {
    setModalMode("edit");
    setInitialFormData(data);
    setFormVisible(true);
  };
  const openAddNewModal = () => {
    setModalMode("add");
    setInitialFormData();
    setFormVisible(true);
  };
  if (!cards || !tags) return null;
  return (
    <>
      <Header
        onAddButtonClick={openAddNewModal}
        onManageTagsButtonClick={() => setTagsModalVisible(true)}
        onTrainModeButtonClick={() => setTrainMode(!isTrainMode)}
        isTrainMode={isTrainMode}
      />
      {isTrainMode ? (
        <TrainingContainer />
      ) : (
        <>
          <Tabs fullwidth type="toggle">
            {languages.map(lang => (
              <Tab
                key={lang.value}
                active={selectedLang === lang}
                onClick={() => setSelectedLang(lang)}
              >
                {lang.title}
              </Tab>
            ))}
          </Tabs>
          <CardsContainer
            tags={tags}
            cards={cards}
            lang={selectedLang}
            onEditButtonClick={openEditModal}
            onDeleteButtonClick={onDelete}
          />
        </>
      )}
      <Modal
        title={modalMode === "add" ? "Add new card" : "Edit card"}
        isShown={isFormVisible}
        onClose={() => {
          setFormVisible(false);
        }}
      >
        <AddCardForm
          onSave={onSave}
          initialValues={initialFormData}
          onCancel={() => {
            setFormVisible(false);
          }}
        />
      </Modal>
      <Modal
        title="Manage tags"
        isShown={isTagsModalVisible}
        onClose={() => {
          setTagsModalVisible(false);
        }}
      >
        <ManageTagsForm
          withLoader={withLoader}
          onCancel={() => {
            setTagsModalVisible(false);
          }}
        />
      </Modal>
    </>
  );
};

MainContainer.propTypes = {
  setLoading: PropTypes.func.isRequired
};
