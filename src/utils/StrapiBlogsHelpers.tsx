import {
  HeadingType,
  LinkType,
  ListItemType,
  ListType,
  ParagraphType,
  QuoteType,
  TextType
} from '../types/StrapiBlogs';

// ======================================================================
// console.log(
//   createChild({
//     type: 'text',
//     text: 'asldsjfldsaslf',
//     underline: true,
//     italic: true,
//     bold: true
//   })
// );
// output: <span className=" underline italic bold">asldsjfldsaslf</span>
// ======================================================================
export function createText(obj: TextType) {
  let classNames = '';
  if (obj.type === 'text') {
    for (const key in obj) {
      if (key !== 'type' && key !== 'text') {
        classNames = classNames + ' ' + key;
      }
    }

    if (classNames.length > 0) {
      return <span className={`${classNames}`}>{obj.text}</span>;
    }

    return obj.text;
  }

  return '';
}

// ==============================================================
// console.log(
//   createLink({
//     type: 'link',
//     url: 'https://google.com',
//     children: [
//       {
//         type: 'text',
//         text: 'asjgladhslgadhsflads'
//       }
//     ]
//   })
// );
// output: <a href="https://google.com">asjgladhslgadhsflads</a>
// ==============================================================
export function createLink(obj: LinkType) {
  if (obj.type === 'link') {
    return (
      <a href={obj.url}>{obj.children.map((el) => createText(el))}</a>
    );
  }

  return '';
}

export function createChild(obj: TextType | LinkType) {
  if (obj.type === 'link') {
    return createLink(obj);
  }
  if (obj.type === 'text') {
    return createText(obj);
  }

  return '';
}

// ==============================================================
// const para: ParagraphType = {
//   type: 'paragraph',
//   children: [
//     {
//       type: 'text',
//       text: ''
//     },
//     {
//       type: 'link',
//       url: 'https://google.com',
//       children: [
//         {
//           type: 'text',
//           text: 'asjgladhslgadhsflads'
//         }
//       ]
//     },
//     {
//       text: ' sddafdfasf ',
//       type: 'text'
//     },
//     {
//       type: 'link',
//       url: 'https://google.com',
//       children: [
//         {
//           type: 'text',
//           text: 'asfdafasd',
//           strikethrough: true,
//           underline: true,
//           italic: true,
//           bold: true,
//           code: true
//         }
//       ]
//     },
//     {
//       text: '',
//       type: 'text'
//     }
//   ]
// };
// output: <p><a href="https://google.com">asjgladhslgadhsflads</a> sddafdfasf <a href="https://google.com"><span class=" strikethrough underline italic bold code">asfdafasd</span></a></p>
// ==============================================================
export function createParagraph(obj: ParagraphType) {
  if (obj.type === 'paragraph') {
    return <p>{obj.children.map((el) => createChild(el))}</p>;
  }

  return '';
}

// ==============================================================
// const q: QuoteType = {
//   type: 'quote',
//   children: [
//     {
//       type: 'text',
//       text: 'quote text '
//     },
//     {
//       type: 'text',
//       text: 'some ',
//       bold: true,
//       italic: true,
//       underline: true,
//       strikethrough: true,
//       code: true
//     },
//     {
//       type: 'link',
//       url: 'https://google.com',
//       children: [
//         {
//           type: 'text',
//           text: 'example'
//         }
//       ]
//     },
//     {
//       text: '',
//       type: 'text'
//     }
//   ]
// };

// output: <q>
//   quote text{' '}
//   <span class=' bold italic underline strikethrough code'>some </span>
//   <a href='https://google.com'>example</a>
// </q>;
// ==============================================================
export function createQuote(obj: QuoteType) {
  if (obj.type === 'quote') {
    return <q>{obj.children.map((el) => createChild(el))}</q>;
  }

  return '';
}

function createListItem(obj: ListItemType) {
  if (obj.type === 'list-item') {
    return <li>{obj.children.map((el) => createChild(el))}</li>;
  }
  return '';
}

// const list: ListType = {
//   type: 'list',
//   format: 'ordered',
//   children: [
//     {
//       type: 'list-item',
//       children: [
//         {
//           type: 'text',
//           text: 'quote text '
//         },
//         {
//           type: 'text',
//           text: 'some ',
//           bold: true,
//           italic: true,
//           underline: true,
//           strikethrough: true,
//           code: true
//         },
//         {
//           type: 'text',
//           text: 'example'
//         }
//       ]
//     },
//     {
//       type: 'list-item',
//       children: [
//         {
//           type: 'text',
//           text: 'quote text'
//         }
//       ]
//     },
//     {
//       type: 'list-item',
//       children: [
//         {
//           type: 'text',
//           text: ''
//         }
//       ]
//     },
//     {
//       type: 'list-item',
//       children: [
//         {
//           type: 'text',
//           text: 'quote text '
//         },
//         {
//           type: 'text',
//           text: 'some ',
//           bold: true,
//           italic: true,
//           underline: true,
//           strikethrough: true,
//           code: true
//         },
//         {
//           type: 'text',
//           text: 'example'
//         }
//       ]
//     },
//     {
//       type: 'list-item',
//       children: [
//         {
//           type: 'text',
//           text: ''
//         }
//       ]
//     }
//   ]
// };
// output: <ol>
//   <li>
//     quote text{' '}
//     <span class=' bold italic underline strikethrough code'>
//       some{' '}
//     </span>
//     example
//   </li>
//   <li>quote text</li>
//   <li></li>
//   <li>
//     quote text{' '}
//     <span class=' bold italic underline strikethrough code'>
//       some{' '}
//     </span>
//     example
//   </li>
//   <li></li>
// </ol>;
export function createList(obj: ListType) {
  if (obj.format === 'ordered') {
    return <ol>{obj.children.map((el) => createListItem(el))}</ol>;
  }
  if (obj.format === 'unordered') {
    return <ul>{obj.children.map((el) => createListItem(el))}</ul>;
  }

  return '';
}

// const headeing1: HeadingType = {
//   type: 'heading',
//   children: [
//     {
//       type: 'text',
//       text: 'heading '
//     },
//     {
//       type: 'link',
//       url: 'https:1',
//       children: [
//         {
//           type: 'text',
//           text: '1',
//           bold: true,
//           italic: true,
//           underline: true,
//           strikethrough: true,
//           code: true
//         }
//       ]
//     },
//     {
//       text: '',
//       type: 'text'
//     }
//   ],
//   level: 1
// };
// output: <h1>
//   heading{' '}
//   <a href='https:1'>
//     <span class=' bold italic underline strikethrough code'>1</span>
//   </a>
// </h1>;

export function createHeading(obj: HeadingType) {
  if (obj.type === 'heading') {
    switch (obj.level) {
      case 1:
        return <h1>{obj.children.map((el) => createChild(el))}</h1>;
      case 2:
        return <h2>{obj.children.map((el) => createChild(el))}</h2>;
      case 3:
        return <h3>{obj.children.map((el) => createChild(el))}</h3>;
      case 4:
        return <h4>{obj.children.map((el) => createChild(el))}</h4>;
      case 5:
        return <h5>{obj.children.map((el) => createChild(el))}</h5>;
      case 6:
        return <h6>{obj.children.map((el) => createChild(el))}</h6>;
      default:
        console.error('Error while createing heading element');
    }
  }

  return '';
}
