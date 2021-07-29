function find_length(value, base)
{
  let i = 0;
  while (value >= base)
  {
    value = value / base;
    i++;
  }
  return (i);
}

function convert_to_base(value, base, nbr, l)
{
  let c = '';
  let j = 0;

  j = 0;
  while (value >= base)
  {
    if ((value % base) > 9)
    {
      c = String.fromCharCode(((value % base) - 10).toString().charCodeAt(0) + 17);
      nbr[l - j] = c;
    }
    else
    {
      c = String.fromCharCode((value % base).toString().charCodeAt(0));
      nbr[l - j] = c;
    }
    value = value / base;
    j++;
  }
  if (value > 9)
    nbr[l - j] = String.fromCharCode((value - 10).toString().charCodeAt(0) + 17);
  else {
    
    nbr[l - j] = String.fromCharCode(value.toString().charCodeAt(0));
  }
  return (nbr);
}

export function conv(value, base)
{
  let l = 0;
  let sign = 1;
  let nbr = [];

  if (value < 0)
  {
    sign = -1;
    value = value * -1;
  }
  l = find_length(value, base);
  if (sign == -1)
  {
    l++;
    nbr[0] = '-';
  }
  nbr = convert_to_base(value, base, nbr, l);
  return (nbr);
}
