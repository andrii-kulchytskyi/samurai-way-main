import React from 'react';
import './index.css';
import {renderTree} from "./redux/state/render";
import {store} from "./redux/state/state";


store.subscribe(renderTree)
renderTree()
