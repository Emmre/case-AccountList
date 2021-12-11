import React from "react";
import { SelectItem } from "./styled";

const SelectBox = ({ selected, ...props }) => (
  <SelectItem value={selected} name="language" id="language" {...props}>
    <option value="tr">Türkçe</option>
    <option value="en">English</option>
  </SelectItem>
);

export default SelectBox;
