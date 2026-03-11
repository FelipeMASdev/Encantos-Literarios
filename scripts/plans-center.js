(() => {
  // select targeted html elements
  const plansContainer = document.querySelector('#plans .cards-container');
  if (!plansContainer) return;

  const cardWrappers = Array.from(plansContainer.querySelectorAll('.card-wrapper'));
  if (cardWrappers.length === 0) return;

  // create variables
  const defaultIndex = 1;
  let selectedIndex;

  // function to shift the cards with index as parameter, invoke once with default index
  const shiftCard = (index) => {
    selectedIndex = index;
    const shift =  selectedIndex - defaultIndex;
    plansContainer.style.setProperty('--shift', shift);
  };

  shiftCard(defaultIndex);   

  // add event listeners to call shift card with the event target's index in the array as argument
  cardWrappers.forEach((wrapper, index) => {
    const activateCard = () => shiftCard(index);

    wrapper.addEventListener('mouseenter', activateCard);
    wrapper.addEventListener('click', activateCard);
    wrapper.addEventListener('focusin', activateCard);
  });
})();
