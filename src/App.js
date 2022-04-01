import React from "react";
import {
  Button,
  Badge,
  AlertCircleOutline,
  Breadcrumbs,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  AlphaBCircle,
  BookIcon,
  Input,
  NotificationBadge,
  RadioButton,
  RadioButtonGroup,
  Snackbar,
  Tab,
  Tooltip,
} from "@masaischool/lotus";
import { Box, Heading } from "@chakra-ui/react";

const App = () => {
  const [selectedValues, setSelectedValues] = React.useState(["checkbox-one"]);
  const [inputValue, setInputValue] = React.useState("hello");
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [radioSelectedValue, setRadioSelectedValue] =
    React.useState("radio-two");
  return (
    <Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Badge</Heading>
        <Badge
          label="label"
          leftIcon={<AlertCircleOutline />}
          size="large"
          variant="blue"
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Breadcrumbs</Heading>
        <Breadcrumbs
          list={[
            {
              link: "#",
              text: "Courses",
            },
            {
              isSelected: true,
              link: "#",
              text: "Full Stack Web Development",
            },
          ]}
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Button</Heading>
        <Button size="sm" variant="primary">
          Primary
        </Button>
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Checkbox</Heading>
        <Checkbox label="Checkbox " size="regular" value="checkbox_label" />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Checkbox Group</Heading>
        <Heading as="h2">Selected values: {selectedValues.join(", ")}</Heading>
        <CheckboxGroup
          columnGap="16px"
          commonSize="regular"
          gridTemplateComlumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          onChange={(value) => {
            setSelectedValues(value);
          }}
          options={[
            {
              label: "Checkbox One",
              support_label: "Please type the supporting text",
              value: "checkbox-one",
            },
            {
              label: "Checkbox Two",
              support_label: "Please type the supporting text",
              value: "checkbox-two",
            },
            {
              label: "Checkbox Three",
              support_label: "Please type the supporting text",
              value: "checkbox-three",
            },
            {
              label: "Checkbox Four",
              support_label: "Please type the supporting text",
              value: "checkbox-four",
            },
          ]}
          rowGap="16px"
          selectedValues={selectedValues}
          spacing="16px"
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Dropdown</Heading>
        <Dropdown
          appendTwelfthPassYearsInOptions
          getValueCallback={function noRefCheck() {}}
          label="Select working status:"
          leftIcon={<AlphaBCircle boxSize="5" />}
          options={[
            {
              text: "Not Completed",
            },
          ]}
          placeholder="Select working status"
          width="400px"
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Icon</Heading>
        <BookIcon boxSize="24px" color="red" />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Input</Heading>
        <Heading as="h2">Current Value: {inputValue}</Heading>
        <Input
          getValueCallback={(value) => {
            setInputValue(value);
          }}
          placeholder="ayaan.chopra@domain.tld"
          rightIcon={<BookIcon />}
          type="text"
          width="18.75rem"
          preFilledValue={inputValue}
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">NotificationBadge</Heading>
        <NotificationBadge hasBadge size="64px" />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">RadioButton</Heading>
        <RadioButton label="Radio Button" size="regular" value="radio_label" />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">RadioButtonGroup</Heading>
        <Heading as="h2">Selected Value:{radioSelectedValue}</Heading>
        <RadioButtonGroup
          columnGap="16px"
          commonSize="regular"
          gridTemplateComlumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          onChange={(value) => {
            setRadioSelectedValue(value);
          }}
          options={[
            {
              label: "Radio One",
              support_label: "Please type the supporting text",
              value: "radio-one",
            },
            {
              label: "Radio Two",
              support_label: "Please type the supporting text",
              value: "radio-two",
            },
            {
              label: "Radio Three",
              support_label: "Please type the supporting text",
              value: "radio-three",
            },
            {
              label: "Radio Four",
              support_label: "Please type the supporting text",
              value: "radio-four",
            },
          ]}
          rowGap="16px"
          selectedValue={radioSelectedValue}
          spacing="16px"
        />
      </Box>
      <Box border={"1px solid grey"} p={"ms-16"}>
        <Heading as="h2">Snackbar</Heading>
        <Button variant="tertiary" onClick={() => setShowSnackbar(true)}>
          Click to Launch Snackbar
        </Button>
        {showSnackbar && <Snackbar type="success" />}
      </Box>
      <Box>
        <Heading as="h2">Tab</Heading>
        <Tab activeType="line" label="Label" />
      </Box>
    </Box>
  );
};

export default App;
