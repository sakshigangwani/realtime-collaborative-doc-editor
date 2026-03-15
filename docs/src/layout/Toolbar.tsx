import "../styles/toolbar.css"

import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatColorText,
  MdHighlight,
  MdUndo,
  MdRedo,
  MdInsertLink,
  MdImage,
  MdFormatAlignLeft,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdChecklist,
  MdFormatIndentIncrease,
  MdFormatIndentDecrease,
  MdFormatLineSpacing
} from "react-icons/md"

export default function Toolbar(){

  return(

    <div className="toolbar">

      {/* ZOOM */}

      <select className="dropdown">
        <option>100%</option>
        <option>125%</option>
        <option>150%</option>
      </select>

      <div className="divider"/>

      {/* TEXT STYLE */}

      <select className="dropdown">
        <option>Normal text</option>
        <option>Heading 1</option>
        <option>Heading 2</option>
      </select>

      <select className="dropdown">
        <option>Arial</option>
        <option>Times New Roman</option>
      </select>

      <div className="font-size">
        <button>-</button>
        <span>11</span>
        <button>+</button>
      </div>

      <div className="divider"/>

      {/* BASIC FORMATTING */}

      <button className="icon-btn"><MdFormatBold/></button>
      <button className="icon-btn"><MdFormatItalic/></button>
      <button className="icon-btn"><MdFormatUnderlined/></button>
      <button className="icon-btn"><MdFormatColorText/></button>
      <button className="icon-btn"><MdHighlight/></button>

      <div className="divider"/>

      {/* ALIGNMENT */}

      <button className="icon-btn"><MdFormatAlignLeft/></button>

      <div className="divider"/>

      {/* LISTS */}

      <button className="icon-btn"><MdChecklist/></button>
      <button className="icon-btn"><MdFormatListBulleted/></button>
      <button className="icon-btn"><MdFormatListNumbered/></button>

      <div className="divider"/>

      {/* INDENTATION */}

      <button className="icon-btn"><MdFormatIndentDecrease/></button>
      <button className="icon-btn"><MdFormatIndentIncrease/></button>

      <div className="divider"/>

      {/* LINE SPACING */}

      <button className="icon-btn"><MdFormatLineSpacing/></button>

      <div className="divider"/>

      {/* LINK + IMAGE */}

      <button className="icon-btn"><MdInsertLink/></button>
      <button className="icon-btn"><MdImage/></button>

      <div className="divider"/>

      {/* UNDO REDO */}

      <button className="icon-btn"><MdUndo/></button>
      <button className="icon-btn"><MdRedo/></button>

    </div>

  )
}