import{r as g,d as s,j as e,o as p,aB as O,bm as S,b5 as T,az as N,bc as z,P as A,aD as $,aQ as P,h as j,T as c,aH as D}from"./index-C8FJCBfb.js";import{F as w}from"./FuseExample-DpwYu1DD.js";import{D as F}from"./DocumentationPageBreadcrumb-B0t3mRJf.js";import{G as d}from"./Grid-BtFsH-xz.js";import{C as H}from"./CardHeader-XxD3k_Kj.js";import"./DocumentationNavigation-CoT9gNpi.js";import"./ChangelogDoc-zjSh-eTP.js";function x(t,l){return t.filter(i=>l.indexOf(i)===-1)}function G(t,l){return t.filter(i=>l.indexOf(i)!==-1)}function E(){const[t,l]=g.useState([]),[i,u]=g.useState([0,1,2,3]),[o,f]=g.useState([4,5,6,7]),m=G(t,i),h=G(t,o),L=r=>()=>{const n=t.indexOf(r),a=[...t];n===-1?a.push(r):a.splice(n,1),l(a)},b=()=>{f(o.concat(i)),u([])},v=()=>{f(o.concat(m)),u(x(i,m)),l(x(t,m))},I=()=>{u(i.concat(h)),f(x(o,h)),l(x(t,h))},y=()=>{u(i.concat(o)),f([])},C=r=>e(A,{sx:{width:200,height:230,overflow:"auto"},children:e(O,{dense:!0,component:"div",role:"list",children:r.map(n=>{const a=`transfer-list-item-${n}-label`;return s(z,{role:"listitem",onClick:L(n),children:[e(S,{children:e(T,{checked:t.indexOf(n)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":a}})}),e(N,{id:a,primary:`List item ${n+1}`})]},n)})})});return s(d,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e(d,{item:!0,children:C(i)}),e(d,{item:!0,children:s(d,{container:!0,direction:"column",alignItems:"center",children:[e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:b,disabled:i.length===0,"aria-label":"move all right",children:"≫"}),e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:v,disabled:m.length===0,"aria-label":"move selected right",children:">"}),e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:I,disabled:h.length===0,"aria-label":"move selected left",children:"<"}),e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:y,disabled:o.length===0,"aria-label":"move all left",children:"≪"})]})}),e(d,{item:!0,children:C(o)})]})}const Q=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList() {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items: readonly number[]) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value: number) => {
          const labelId = \`transfer-list-item-\${value}-label\`;

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`} />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}
`;function k(t,l){return t.filter(i=>l.indexOf(i)===-1)}function R(t,l){return t.filter(i=>l.indexOf(i)!==-1)}function _(t,l){return[...t,...k(l,t)]}function q(){const[t,l]=g.useState([]),[i,u]=g.useState([0,1,2,3]),[o,f]=g.useState([4,5,6,7]),m=R(t,i),h=R(t,o),L=r=>()=>{const n=t.indexOf(r),a=[...t];n===-1?a.push(r):a.splice(n,1),l(a)},b=r=>R(t,r).length,v=r=>()=>{b(r)===r.length?l(k(t,r)):l(_(t,r))},I=()=>{f(o.concat(m)),u(k(i,m)),l(k(t,m))},y=()=>{u(i.concat(h)),f(k(o,h)),l(k(t,h))},C=(r,n)=>s(P,{children:[e(H,{sx:{px:2,py:1},avatar:e(T,{onClick:v(n),checked:b(n)===n.length&&n.length!==0,indeterminate:b(n)!==n.length&&b(n)!==0,disabled:n.length===0,inputProps:{"aria-label":"all items selected"}}),title:r,subheader:`${b(n)}/${n.length} selected`}),e($,{}),e(O,{sx:{width:200,height:230,bgcolor:"background.paper",overflow:"auto"},dense:!0,component:"div",role:"list",children:n.map(a=>{const B=`transfer-list-all-item-${a}-label`;return s(z,{role:"listitem",onClick:L(a),children:[e(S,{children:e(T,{checked:t.indexOf(a)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":B}})}),e(N,{id:B,primary:`List item ${a+1}`})]},a)})})]});return s(d,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e(d,{item:!0,children:C("Choices",i)}),e(d,{item:!0,children:s(d,{container:!0,direction:"column",alignItems:"center",children:[e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:I,disabled:m.length===0,"aria-label":"move selected right",children:">"}),e(p,{sx:{my:.5},variant:"outlined",size:"small",onClick:y,disabled:h.length===0,"aria-label":"move selected left",children:"<"})]})}),e(d,{item:!0,children:C("Chosen",o)})]})}const J=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly number[], b: readonly number[]) {
  return [...a, ...not(b, a)];
}

export default function SelectAllTransferList() {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly number[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: readonly number[]) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={\`\${numberOfChecked(items)}/\${items.length} selected\`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = \`transfer-list-all-item-\${value}-label\`;

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`} />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  );
}
`;function Z(t){return s(D,{children:[s("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(F,{}),e(p,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/transfer-list",target:"_blank",role:"button",size:"small",startIcon:e(j,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(c,{className:"text-32 my-16 font-700",component:"h1",children:"Transfer List"}),e(c,{className:"description",children:'A Transfer List (or "shuttle") enables the user to move one or more list items between lists.'}),e(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic transfer list"}),e(c,{className:"text-14 mb-32",component:"div",children:'For completeness, this example includes buttons for "move all", but not every transfer list needs these.'}),e(c,{className:"text-14 mb-32",component:"div",children:e(w,{name:"TransferList.js",className:"my-16",iframe:!1,component:E,raw:Q})}),e(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Enhanced transfer list"}),e(c,{className:"text-14 mb-32",component:"div",children:'This example exchanges the "move all" buttons for a "select all / select none" checkbox and adds a counter.'}),e(c,{className:"text-14 mb-32",component:"div",children:e(w,{name:"SelectAllTransferList.js",className:"my-16",iframe:!1,component:q,raw:J})}),e(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(c,{className:"text-14 mb-32",component:"div",children:"The component comes with a couple of limitations:"}),s("ul",{className:"space-y-16",children:[s("li",{children:["It only works on desktop. If you have a limited amount of options to select, prefer the ",e("a",{href:"/material-ui/react-autocomplete/#multiple-values",children:"Autocomplete"})," component. If mobile support is important for you, have a look at ",e("a",{href:"https://github.com/mui/material-ui/issues/27579",children:"#27579"}),"."]}),s("li",{children:["There are no high-level components exported from npm. The demos are based on composition. If this is important for you, have a look at ",e("a",{href:"https://github.com/mui/material-ui/issues/27579",children:"#27579"}),"."]})]})]})}export{Z as default};
