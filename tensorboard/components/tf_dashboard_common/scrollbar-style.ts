/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {html} from '@polymer/polymer';
import '@polymer/paper-styles/paper-styles';
const template = html`
  <dom-module id="scrollbar-style">
    <template>
      <style>
        .scrollbar::-webkit-scrollbar-track {
          visibility: hidden;
        }

        .scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .scrollbar::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
          background-color: var(--paper-grey-500);
          color: var(--paper-grey-900);
        }
        .scrollbar {
          box-sizing: border-box;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild(template.content);
