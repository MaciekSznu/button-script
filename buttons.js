"use strict";

//dodać funkcjonalność aktywnej klasy buttonu

const buttons = document.querySelectorAll(".user-interaction-button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonGroupName = `.${e.target.dataset.buttonGroupName}`;
    const targetClassName = `.${e.target.dataset.targetClassName}`;
    const toggleClassName = `${e.target.dataset.toggleClassName}`;
    const activeButtonClassName = `${e.target.dataset.activeButtonClassName}`;

    // OBSŁUGA KLASY AKTYWNEGO BUTTONU
    // kliknięta grupa buttonów
    const eTargetTagName = e.target.tagName;
    const eTargetButtonGroupName = e.target.dataset.buttonGroupName;
    const selectedButtonsGroupButtons = document.querySelectorAll(
      `${eTargetTagName}[data-button-group-name=${eTargetButtonGroupName}]`
    );

    selectedButtonsGroupButtons.forEach((button) => {
      button.classList.remove(activeButtonClassName);
    });
    e.target.classList.add(activeButtonClassName);
    // console.log(selectedButtonsGroupButtons);

    // OBSŁUGA ELEMENTÓW MODYFIKOWANYCH
    // elementy modyfikowane
    const targetButtonsGroup = document.querySelectorAll(buttonGroupName);
    const targetElements = document.querySelectorAll(targetClassName);

    // generuje tablicę targetButtonsToggleClassList z listą klas które togglują buttony danej grupy
    const targetButtonsArray = Array.from(targetButtonsGroup[0].children);
    // console.log(targetButtonsArray);
    const targetButtonsToggleClassList = [];
    targetButtonsArray.forEach((targetButton) => {
      targetButtonsToggleClassList.push(targetButton.dataset.toggleClassName);
    });

    // podmienia klasy w target elements
    targetElements.forEach((targetElement) => {
      const toggleTargetClass = () => {
        targetElement.classList.remove(...targetButtonsToggleClassList);
        targetElement.classList.add(toggleClassName);
      };
      // const toggleActiveClass = () => {
      //   targetButton.classList.remove(activeButtonClassName);
      //   e.target.classList.add(activeButtonClassName);
      // };
      targetElement.classList.contains(toggleClassName) ? null : toggleTargetClass();
    });
  });
});
