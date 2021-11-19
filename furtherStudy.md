# Further Study 1

It seems that we are having a racing issue, to fix this issue without the need of useEffect,
we are passing a callback to the setColors function.

```JSX
colors.includes(awnser.color)
      ? setColors(colors)
      : setColors((colors) => {
          colors = [...colors, awnser.color];
          checkCount(colors); // this will make sure we are reading the updated colors list.
          return colors;
        });
```

# Futher Study 2

1. For some reason some boxes are rendered round ( no idea what's causing this)
   > realized that overlapping color classes were the issue. Discovered that we can use template literals in the className and it facilitated.
2. Did figure out a way to render all the boxes with different colors, but still need a better way to get an element from the components an change the state of that component.
   (break needed much?)

# Further study 3

it seems that both items, were already satisfied by this code. only implementation would be the
"changed" msg inside the box component.
