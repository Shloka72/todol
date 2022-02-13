const newCategoryForm = document.querySelector('[data-newcategory-form]');
const newCategoryInput = document.querySelector('[data-newcategory-input]');
const categorieContainer = document.querySelector('[data-categories]');
const LOCAL_STORAGE_CATEGORIES_KEY ='LOCAL_STORAGE_CATEGORIES_KEY';
let categories= JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATEGORIES_KEY)) || [];
newCategoryForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const category=newCategory.value;
    const isCategoryEmpty =!category || !category.trim().length;
    
    if(isCategoryEmpty)
    {
        return console.log('Please enter a task');
            }
categories.push({_id: Date.now().toString(),category: category,color:getrandomHexColor()});
newCategoryInput.value='';
saveAndRender()
        })
        function saveAndRender(){
            save();
            render();
        }
        function save()
        {
localStorage.setItem(LOCAL_STORAGE_CATEGORIES_KEY,JSON.stringify(categories));
        }
        function render()
        {
renderCategories();
        }
        function renderCategories()
        {
        catergoriesContainer.innerHTML+=`<li class="sidebar-item">All Categories</li>`;
        catergories.forEach(({_id,category,color})=>{
        catergoriesContainer.innerHTML+=`<li class="sidebar-item" data-category-id=${_id}>${category}<input type="color"value=${color}class="sidebar-color"></li>`;
       
        });
        function clearChildElements(element)
        {
            while(element.firstChild)
            {
                element.removeCild(element.firstChild);
            }
        }
        function getrandomHexColor()
       
              {
            var hex=(Math.round(Math.random()* 0xffffff)).toString(16);
            while (hex.length<6)hex="0" + hex;
            return `#${hex}`;

        }
