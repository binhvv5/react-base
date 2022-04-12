import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import { translate } from 'react-jhipster';

const TinyEditor = (props: any) => {
  const [text, setText] = useState(props?.value);
  const triggerChange = changedValue => {
    setText(changedValue);
    const { onChange } = props;
    if (onChange) {
      onChange(changedValue);
    }
  };

  return (
    <>
      <Editor
        apiKey="hjdqmvgiiuk9y04pi0c9uctweh1ntm59dvdfzf67l389ahbd"
        value={text ?? props?.value}
        init={{
          height: 500,
          menubar: `file edit view insert format tabl custom `,
          plugins: [
            'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          ],
          toolbar:
            'undo redo | bold italic strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | preview save print | insertfile image media template link anchor codesample | ltr rtl',
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          image_advtab: true,
          image_caption: true,
          quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          noneditable_noneditable_class: 'mceNonEditable',
          ced_root_block: false,
          toolbar_mode: 'sliding',
          contextmenu: 'link image imagetools table',
          placeholder: translate('tiny-editor.placeholder'),
        }}
        onEditorChange={triggerChange}
      />
      <input id="my-file" type="file" name="my-file" style={{ display: 'none' }} />
    </>
  );
};

export default TinyEditor;
