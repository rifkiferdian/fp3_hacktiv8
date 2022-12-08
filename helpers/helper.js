const convert_rupiah = (number) => {
    return `Rp ${new Intl.NumberFormat("id-ID").format(number)}`;
}

const reformat = (currency) => {
  return parseInt(currency.split(' ')[1].split('.').join(''));
}

module.exports = {
    convert_rupiah,
    reformat
};