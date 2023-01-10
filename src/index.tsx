import React from 'react';
import './index.css';
import {state} from "./redux/state/state";
import {renderTree} from "./redux/state/render";

renderTree(state)
