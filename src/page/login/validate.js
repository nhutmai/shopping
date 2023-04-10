// const validate = (listOption) => {
//   listOption.map((input) => {
//     var elem = document.getElementById(input.id);
//     var error = document.getElementById(`${input.id}err`);

//     elem.onblur = () => {
//       if (input.option.minLen) {
//         if (elem.value.length < input.option.minLen) {
//           error.textContent = `vui long nhap nhieu hon ${input.option.minLen} ki tu`;
//         }
//       }
//       if (input.option.isRequire) {
//         if (elem.value === "") {
//           error.textContent = "vui long nhap truong nay";
//         }
//       }
//     };
//     elem.oninput = () => {
//       error.textContent = "";
//     };
//   });
// };
// const listOption = [
//   {
//     id: "name",
//     option: {
//       isRequire: true,
//       minLen: 6,
//     },
//   },
//   {
//     id: "pass",
//     option: {
//       isRequire: true,
//       minLen: 6,
//     },
//   },
// ];
// validate(listOption);
