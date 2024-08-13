import { useEffect } from "react";

function ChangeText() {
  function translateContent(element) {
    const translations = {
      First: "Pierwszy",
      Second: "Drugi",
      Third: "Trzeci",
      Fourth: "Czwarty",
      Last: "Ostatni",
    };

    const currentText = element.textContent.trim();

    // Check if the current text has a translation
    if (translations[currentText]) {
      element.textContent = translations[currentText];
    }
  }

  useEffect(() => {
    const updateTextContent = () => {
      const makeFixed = document.querySelector(".Layout-root.css-jrrpff");
      if (makeFixed) {
        makeFixed.style.position = "fixed";
      }
      const typographyElement = document.querySelector(
        ".MuiTypography-root.Label-label.Label-titleLabel.Layout-labelWithMargins"
      );
      if (typographyElement) {
        typographyElement.textContent = "Więcej informacji";
      }

      const textareaElement = document.querySelector(
        'textarea[placeholder="Notes"]'
      );
      if (textareaElement) {
        textareaElement.setAttribute("placeholder", "Notatki");
      }
      const neverSpan = document.querySelector(
        "span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.EndRepeatEditor-radioLabel"
      );
      if (neverSpan && neverSpan.textContent.trim() === "Never") {
        neverSpan.textContent = "Nigdy";
      }
      const occurrenceParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.EndRepeatEditor-occurenceLabel"
      );
      if (
        occurrenceParagraph &&
        occurrenceParagraph.textContent.trim() === "occurrence(s)"
      ) {
        occurrenceParagraph.textContent = "wystąpienia";
      }
      const dayParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.IntervalEditor-labelWithMargin"
      );
      if (dayParagraph && dayParagraph.textContent.trim() === "day(s)") {
        dayParagraph.textContent = "dzień/dni";
      }

      const listItemElement = document.querySelector('li[data-value="daily"]');
      if (listItemElement) {
        listItemElement.textContent = "Dzienny";
      }

      const weeklyListItem = document.querySelector('li[data-value="weekly"]');
      if (weeklyListItem) {
        weeklyListItem.textContent = "Tygodniowy";
      }

      const monthlyListItem = document.querySelector(
        'li[data-value="monthly"]'
      );
      if (monthlyListItem) {
        monthlyListItem.textContent = "Miesięczny";
      }

      const yearlyListItem = document.querySelector('li[data-value="yearly"]');
      if (yearlyListItem) {
        yearlyListItem.textContent = "Roczny";
      }

      const selectDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.OutlinedSelect-input"
      );
      if (selectDiv && selectDiv.textContent.trim() === "Daily") {
        selectDiv.textContent = "Dzienny";
      }
      const weeklyDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.OutlinedSelect-input"
      );
      if (weeklyDiv && weeklyDiv.textContent.trim() === "Weekly") {
        weeklyDiv.textContent = "Tygodniowy";
      }
      const monthlyDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.OutlinedSelect-input"
      );
      if (monthlyDiv && monthlyDiv.textContent.trim() === "Monthly") {
        monthlyDiv.textContent = "Miesięczny";
      }

      const yearlyDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.OutlinedSelect-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"
      );

      if (yearlyDiv && yearlyDiv.textContent.trim() === "Yearly") {
        // Corrected from `yearlyListItem` to `yearlyDiv`
        yearlyDiv.textContent = "Roczny";
      }

      const monthParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.IntervalEditor-labelWithMargin"
      );

      if (monthParagraph && monthParagraph.textContent.trim() === "month(s)") {
        monthParagraph.textContent = "miesiąc";
      }
      const everyMonthParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.MonthlyEditor-longLabel"
      );
      if (
        everyMonthParagraph &&
        everyMonthParagraph.textContent.trim() === "of every month"
      ) {
        everyMonthParagraph.textContent = "miesiąca";
      }

      const firstListItem = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="0"]'
      );
      if (
        firstListItem &&
        firstListItem.childNodes[0].textContent.trim() === "First"
      ) {
        firstListItem.textContent = "Pierwszy";
      }

      const listItem = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="1"]'
      );
      if (listItem && yearlyDiv.textContent.trim() !== "Roczny") {
        listItem.textContent = "Drugi";
      }

      const secondListItem = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="2"]'
      );
      if (secondListItem && yearlyDiv.textContent.trim() !== "Roczny") {
        secondListItem.textContent = "Trzeci";
      }

      const fourthListItem = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="3"]'
      );
      if (fourthListItem && yearlyDiv.textContent.trim() !== "Roczny") {
        fourthListItem.textContent = "Czwarty";
      }

      const lastListItem = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="4"]'
      );
      if (lastListItem && yearlyDiv.textContent.trim() !== "Roczny") {
        lastListItem.textContent = "Ostatni";
      }

      const comboboxDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputHiddenLabel"
      );

      if (comboboxDiv) {
        translateContent(comboboxDiv);
      }

      const yearParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.IntervalEditor-labelWithMargin.css-atr4zg-MuiTypography-root"
      );

      if (yearParagraph && yearParagraph.textContent === "year(s)") {
        yearParagraph.textContent = "lat";
      }
      const everyParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.ChangeMonthEditor-label.css-4iy7yg-MuiTypography-root"
      );

      if (everyParagraph) {
        everyParagraph.textContent = "Każdy";
      }
      const theParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.ChangeWeekNumberEditor-label.css-atr4zg-MuiTypography-root"
      );

      if (theParagraph) {
        theParagraph.textContent = "Ten";
      }
      const saveButton = document.querySelector(
        "button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.SaveButton-button.SaveButton-textButton.css-iz0jrc-MuiButtonBase-root-MuiButton-root"
      );

      if (saveButton) {
        saveButton.textContent = "Zapisz";
      }

      const listItemYear = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="1"]'
      );

      if (
        listItemYear &&
        listItemYear.childNodes[0].textContent.trim() === "Second"
      ) {
        listItemYear.childNodes[0].textContent = "Drugi";
      }

      const listItemYearThree = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="2"]'
      );

      if (
        listItemYearThree &&
        listItemYearThree.childNodes[0].textContent.trim() === "Third"
      ) {
        listItemYearThree.childNodes[0].textContent = "Trzeci";
      }
      const listItemYearFour = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="3"]'
      );

      if (
        listItemYearFour &&
        listItemYearFour.childNodes[0].textContent.trim() === "Fourth"
      ) {
        listItemYearFour.childNodes[0].textContent = "Czwarty";
      }
      const listItemYearLast = document.querySelector(
        'li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.FilledSelect-menuItem[data-value="4"]'
      );

      if (
        listItemYearLast &&
        listItemYearLast.childNodes[0].textContent.trim() === "Last"
      ) {
        listItemYearLast.childNodes[0].textContent = "Ostatni";
      }

      const specificDiv = document.querySelector(
        "div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputHiddenLabel.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"
      );

      if (specificDiv) {
        console.log(specificDiv.textContent);
      }
      const weekParagraph = document.querySelector(
        "p.MuiTypography-root.MuiTypography-body1.Label-label.IntervalEditor-labelWithMargin.css-atr4zg-MuiTypography-root"
      );

      if (weekParagraph && weekParagraph.textContent.trim() === "week(s) on:") {
        weekParagraph.textContent = "tydzień";
      }
    };

    updateTextContent();

    const observer = new MutationObserver(updateTextContent);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ChangeText;
