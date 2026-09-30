/* ========================================
   Fuoco Farina — Full Vanilla JS
   Products • Cart • Auth • Smart Payment
======================================== */

// ---------- DATA ----------
const products = [
  { id:1, name:"فاهيتا دجاج سيزلينغ", category:"steaks", categoryAr:"ستيك ومشاوي", price:92, oldPrice:null, image:"images/product-001.jpg", description:"فاهيتا دجاج ساخنة على صينية حديد مع فلفل وبصل وتورتيلا.", badge:"new", available:true },
  { id:2, name:"بامية باللحم", category:"eastern", categoryAr:"أطباق شرقية", price:65, oldPrice:null, image:"images/product-002.jpg", description:"بامية طازجة مطهوة بلحم في طاجن فخاري مع أرز وخبز.", badge:null, available:true },
  { id:3, name:"سالمون مشوي", category:"seafood", categoryAr:"مأكولات بحرية", price:130, oldPrice:null, image:"images/product-003.jpg", description:"فيليه سالمون مشوي مع هريس جزر وهليون وصلصة خفيفة.", badge:"new", available:true },
  { id:4, name:"سمك مشوي كامل", category:"seafood", categoryAr:"مأكولات بحرية", price:120, oldPrice:null, image:"images/product-004.jpg", description:"سمك طازج مشوي بالكامل مع سلطة خضراء وليمون مشوي.", badge:null, available:true },
  { id:5, name:"دجاج مشوي بصلصة الفطر", category:"steaks", categoryAr:"ستيك ومشاوي", price:85, oldPrice:null, image:"images/product-005.jpg", description:"صدر دجاج مشوي مع صلصة فطر كريمية وبطاطس مهروسة وخضار.", badge:null, available:true },
  { id:6, name:"طاجن لحم بالبصل", category:"eastern", categoryAr:"أطباق شرقية", price:80, oldPrice:null, image:"images/product-006.jpg", description:"لحم مطهو ببطء في طاجن مع بصل وصلصة غنية ومقبلات.", badge:null, available:true },
  { id:7, name:"كاليماري مقلي", category:"seafood", categoryAr:"مأكولات بحرية", price:70, oldPrice:null, image:"images/product-007.jpg", description:"حلقات كاليماري مقرمشة مع ليمون وصلصة غمس طازجة.", badge:null, available:true },
  { id:8, name:"روبيان جامبو مشوي", category:"seafood", categoryAr:"مأكولات بحرية", price:140, oldPrice:null, image:"images/product-008.jpg", description:"روبيان جامبو كبير مشوي مع ليمون وأعشاب.", badge:"new", available:true },
  { id:9, name:"ريزوتو بالفطر", category:"eastern", categoryAr:"أطباق شرقية", price:72, oldPrice:null, image:"images/product-009.jpg", description:"ريزوتو إيطالي كريمي بالفطر البري والجبن البارميزان.", badge:null, available:true },
  { id:10, name:"ريزوتو فطر فاخر", category:"eastern", categoryAr:"أطباق شرقية", price:78, oldPrice:null, image:"images/product-010.jpg", description:"ريزوتو بالفطر المشوي والأعشاب في طبق أسود أنيق.", badge:null, available:true },
  { id:11, name:"رافيولي بالزبدة والسيج", category:"eastern", categoryAr:"أطباق شرقية", price:68, oldPrice:null, image:"images/product-011.jpg", description:"رافيولي محشو مع زبدة ونعنع مجفف وفلفل أحمر.", badge:null, available:true },
  { id:12, name:"شوربة بروكلي", category:"eastern", categoryAr:"أطباق شرقية", price:28, oldPrice:null, image:"images/product-012.jpg", description:"شوربة بروكلي كريمية خضراء مع قطع بروكلي طازج.", badge:null, available:true },
  { id:13, name:"ريزوتو فطر بالنبيذ", category:"eastern", categoryAr:"أطباق شرقية", price:75, oldPrice:null, image:"images/product-013.jpg", description:"ريزوتو غني بالفطر المحمر والخضار مع كأس نبيذ.", badge:null, available:true },
  { id:14, name:"شوربة خضار حارة", category:"eastern", categoryAr:"أطباق شرقية", price:32, oldPrice:null, image:"images/product-014.jpg", description:"شوربة خضار حمراء حارة مع خبز طازج.", badge:null, available:true },
  { id:15, name:"شوربة يقطين", category:"eastern", categoryAr:"أطباق شرقية", price:30, oldPrice:null, image:"images/product-015.jpg", description:"شوربة يقطين برتقالية كريمية مع خبز محمص.", badge:null, available:true },
  { id:16, name:"شوربة بروكلي بالريحان", category:"eastern", categoryAr:"أطباق شرقية", price:28, oldPrice:null, image:"images/product-016.jpg", description:"شوربة بروكلي في وعاء أزرق مع ريحان وكروتون.", badge:null, available:true },
  { id:17, name:"شوربة يقطين بالفلفل", category:"eastern", categoryAr:"أطباق شرقية", price:30, oldPrice:null, image:"images/product-017.jpg", description:"شوربة يقطين كريمية ساخنة مع خبز محمص.", badge:null, available:true },
  { id:18, name:"محمرة بالجوز", category:"appetizers", categoryAr:"مقبلات وخبز", price:35, oldPrice:null, image:"images/product-018.jpg", description:"محمرة فلفل أحمر مع جوز وزيت وزعتر وخبز مقرمش.", badge:"new", available:true },
  { id:19, name:"محمرة بالرمان", category:"appetizers", categoryAr:"مقبلات وخبز", price:32, oldPrice:null, image:"images/product-019.jpg", description:"محمرة فلفل أحمر مع رمان وبقدونس.", badge:null, available:true },
  { id:20, name:"متبل بالرمان", category:"appetizers", categoryAr:"مقبلات وخبز", price:28, oldPrice:null, image:"images/product-020.jpg", description:"متبل باذنجان كريمي مع رمان وطماطم وزيت زيتون.", badge:null, available:true },
  { id:21, name:"شوربة بصل فرنسية", category:"eastern", categoryAr:"أطباق شرقية", price:38, oldPrice:null, image:"images/product-021.jpg", description:"شوربة بصل فرنسية كلاسيكية مع جبن محمر من فوق.", badge:null, available:true },
  { id:22, name:"شوربة فطر كريمية", category:"eastern", categoryAr:"أطباق شرقية", price:32, oldPrice:null, image:"images/product-022.jpg", description:"شوربة فطر كريمية غنية مع قطرات كريمة.", badge:null, available:true },
  { id:23, name:"حمص مع خبز", category:"appetizers", categoryAr:"مقبلات وخبز", price:25, oldPrice:null, image:"images/product-023.jpg", description:"حمص كريمي مع زيت زيتون وخبز بيتا مشوي.", badge:null, available:true },
  { id:24, name:"شوربة طماطم", category:"eastern", categoryAr:"أطباق شرقية", price:26, oldPrice:null, image:"images/product-024.jpg", description:"شوربة طماطم ناعمة مع ورقة ريحان.", badge:null, available:true },
  { id:25, name:"سمبوسك سبانخ", category:"appetizers", categoryAr:"مقبلات وخبز", price:32, oldPrice:null, image:"images/product-025.jpg", description:"سمبوسك مثلثة محشوة سبانخ وجبن.", badge:null, available:true },
  { id:26, name:"شوربة لحم صافية", category:"eastern", categoryAr:"أطباق شرقية", price:28, oldPrice:null, image:"images/product-026.jpg", description:"شوربة لحم خفيفة صافية مع أعشاب.", badge:null, available:true },
  { id:27, name:"شوربة عدس كريمية", category:"eastern", categoryAr:"أطباق شرقية", price:26, oldPrice:null, image:"images/product-027.jpg", description:"شوربة عدس صفراء كريمية مع لمسة حارة.", badge:null, available:true },
  { id:28, name:"تبولة", category:"appetizers", categoryAr:"مقبلات وخبز", price:28, oldPrice:null, image:"images/product-028.jpg", description:"تبولة طازجة بالبقدونس والطماطم والبرغل.", badge:null, available:true },
  { id:29, name:"شوربة عدس", category:"eastern", categoryAr:"أطباق شرقية", price:24, oldPrice:null, image:"images/product-029.jpg", description:"شوربة عدس ساخنة مع خبز وليمون.", badge:null, available:true },
  { id:30, name:"سمبوسك سبانخ مقلية", category:"appetizers", categoryAr:"مقبلات وخبز", price:32, oldPrice:null, image:"images/product-030.jpg", description:"سمبوسك سبانخ مقلية ذهبية تُقدّم ساخنة.", badge:null, available:true },
  { id:31, name:"سمبوسك سبانخ", category:"appetizers", categoryAr:"مقبلات وخبز", price:32, oldPrice:null, image:"images/product-031.jpg", description:"سمبوسك مثلثة محشوة سبانخ وبصل.", badge:null, available:true },
  { id:32, name:"كنافة جبنة", category:"desserts", categoryAr:"حلويات", price:55, oldPrice:null, image:"images/product-032.jpg", description:"كنافة جبنة ساخنة تمتد مع فستق.", badge:null, available:true },
  { id:33, name:"شوربة عدس بالخضار", category:"eastern", categoryAr:"أطباق شرقية", price:26, oldPrice:null, image:"images/product-033.jpg", description:"شوربة عدس صفراء مع خبز عربي.", badge:null, available:true },
  { id:34, name:"فطائر جبن مسحوب", category:"appetizers", categoryAr:"مقبلات وخبز", price:38, oldPrice:null, image:"images/product-034.jpg", description:"فطائر ذهبية محشوة جبن ذائب مع سمسم.", badge:null, available:true },
  { id:35, name:"فطائر جبن مسحوب", category:"appetizers", categoryAr:"مقبلات وخبز", price:38, oldPrice:null, image:"images/product-035.jpg", description:"فطائر ذهبية محشوة جبن ذائب مع سمسم.", badge:"new", available:true },
  { id:36, name:"كابتشينو", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-036.jpg", description:"كابتشينو إيطالي مع رغوة حليب ناعمة.", badge:null, available:true },
  { id:37, name:"سمبوسك جبن مقلية", category:"appetizers", categoryAr:"مقبلات وخبز", price:34, oldPrice:null, image:"images/product-037.jpg", description:"سمبوسك جبن مقلية ذهبية تمتد الجبن.", badge:null, available:true },
  { id:38, name:"لاتيه", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-038.jpg", description:"لاتيه كريمي في فنجان أبيض.", badge:null, available:true },
  { id:39, name:"كنافة بالفستق", category:"desserts", categoryAr:"حلويات", price:52, oldPrice:null, image:"images/product-039.jpg", description:"كنافة جبنة مع مكسرات تمتد عند التقطيع.", badge:null, available:true },
  { id:40, name:"أم علي", category:"desserts", categoryAr:"حلويات", price:38, oldPrice:null, image:"images/product-040.jpg", description:"أم علي ساخنة بالمكسرات والزبيب والحليب في طاجن.", badge:"new", available:true },
  { id:41, name:"تيراميسو", category:"desserts", categoryAr:"حلويات", price:50, oldPrice:null, image:"images/product-041.jpg", description:"تيراميسو إيطالي كلاسيكي في كوب زجاج.", badge:null, available:true },
  { id:42, name:"بقلاوة فستق", category:"desserts", categoryAr:"حلويات", price:42, oldPrice:null, image:"images/product-042.jpg", description:"طبقات بقلاوة مقرمشة محشوة فستق.", badge:null, available:true },
  { id:43, name:"كنافة نابلسية", category:"desserts", categoryAr:"حلويات", price:55, oldPrice:null, image:"images/product-043.jpg", description:"كنافة نابلسية ساخنة مع جبن وقطر وفستق.", badge:null, available:true },
  { id:44, name:"أم علي فردية", category:"desserts", categoryAr:"حلويات", price:38, oldPrice:null, image:"images/product-044.jpg", description:"أم علي في قالب فردي مع مكسرات.", badge:null, available:true },
  { id:45, name:"بسبوسة باللوز", category:"desserts", categoryAr:"حلويات", price:35, oldPrice:null, image:"images/product-045.jpg", description:"بسبوسة سميد بالقطر واللوز.", badge:null, available:true },
  { id:46, name:"هريسة باللوز", category:"desserts", categoryAr:"حلويات", price:32, oldPrice:null, image:"images/product-046.jpg", description:"هريسة شرقية حلوة مع لوز وقطر.", badge:null, available:true },
  { id:47, name:"كعكة شوكولاتة", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-047.jpg", description:"شريحة كعكة شوكولاتة غنية مع آيس كريم.", badge:null, available:true },
  { id:48, name:"تشيز كيك", category:"desserts", categoryAr:"حلويات", price:45, oldPrice:null, image:"images/product-048.jpg", description:"تشيز كيك محمص مع كريمة وصوص توت.", badge:null, available:true },
  { id:49, name:"ريد فيلفيت", category:"desserts", categoryAr:"حلويات", price:52, oldPrice:null, image:"images/product-049.jpg", description:"كعكة ريد فيلفيت بطبقات مع كريمة وفراولة.", badge:null, available:true },
  { id:50, name:"بقلاوة فستق مقطعة", category:"desserts", categoryAr:"حلويات", price:42, oldPrice:null, image:"images/product-050.jpg", description:"قطعتان من البقلاوة بالفستق.", badge:null, available:true },
  { id:51, name:"تشيز كيك لوتس", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-051.jpg", description:"تشيز كيك بسكويت لوتس مع صوص كراميل.", badge:null, available:true },
  { id:52, name:"كعكة فراولة طبقات", category:"desserts", categoryAr:"حلويات", price:55, oldPrice:null, image:"images/product-052.jpg", description:"كعكة فراولة حمراء بطبقات مع صوص.", badge:null, available:true },
  { id:53, name:"بروفيترول شوكولاتة", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-053.jpg", description:"بروفيترول محشو آيس كريم مع صوص شوكولاتة.", badge:null, available:true },
  { id:54, name:"تشيز كيك لوتس", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-054.jpg", description:"تشيز كيك لوتس كريمي مع بسكويت.", badge:null, available:true },
  { id:55, name:"ماكرون مشكل", category:"desserts", categoryAr:"حلويات", price:45, oldPrice:null, image:"images/product-055.jpg", description:"تشكيلة ماكرون فرنسي بنكهات متعددة.", badge:"new", available:true },
  { id:56, name:"آيس كريم فانيلا", category:"desserts", categoryAr:"حلويات", price:22, oldPrice:null, image:"images/product-056.jpg", description:"كرة آيس كريم فانيلا في كوب زجاج.", badge:null, available:true },
  { id:57, name:"آيس كريم شوكولاتة", category:"desserts", categoryAr:"حلويات", price:22, oldPrice:null, image:"images/product-057.jpg", description:"كرة آيس كريم شوكولاتة غنية.", badge:null, available:true },
  { id:58, name:"وافل بالشوكولاتة", category:"desserts", categoryAr:"حلويات", price:42, oldPrice:null, image:"images/product-058.jpg", description:"وافل مقرمش مع كرة آيس كريم وصوص شوكولاتة.", badge:null, available:true },
  { id:59, name:"باناكوتا بالتوت", category:"desserts", categoryAr:"حلويات", price:40, oldPrice:null, image:"images/product-059.jpg", description:"باناكوتا إيطالية مع صوص توت أحمر.", badge:null, available:true },
  { id:60, name:"ماكرون مشكل", category:"desserts", categoryAr:"حلويات", price:45, oldPrice:null, image:"images/product-060.jpg", description:"تشكيلة ماكرون فرنسي بألوان ونكهات متعددة.", badge:null, available:true },
  { id:61, name:"باناكوتا بالفراولة", category:"desserts", categoryAr:"حلويات", price:42, oldPrice:null, image:"images/product-061.jpg", description:"باناكوتا مع فراولة وتوت وصوص.", badge:null, available:true },
  { id:62, name:"آيس كريم فستق", category:"desserts", categoryAr:"حلويات", price:25, oldPrice:null, image:"images/product-062.jpg", description:"آيس كريم فستق أخضر طبيعي.", badge:null, available:true },
  { id:63, name:"بروفيترول بالشوكولاتة", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-063.jpg", description:"بروفيترول محشو كريمة مع صوص شوكولاتة ساخن.", badge:null, available:true },
  { id:64, name:"آيس كريم شوكولاتة فاخر", category:"desserts", categoryAr:"حلويات", price:24, oldPrice:null, image:"images/product-064.jpg", description:"كرة آيس كريم شوكولاتة لامعة.", badge:null, available:true },
  { id:65, name:"آيس كريم فراولة", category:"desserts", categoryAr:"حلويات", price:22, oldPrice:null, image:"images/product-065.jpg", description:"آيس كريم فراولة طازج مع شريحة فراولة.", badge:null, available:true },
  { id:66, name:"وافل نوتيلا", category:"desserts", categoryAr:"حلويات", price:45, oldPrice:null, image:"images/product-066.jpg", description:"وافل مع نوتيلا وصوص شوكولاتة.", badge:null, available:true },
  { id:67, name:"براوني مع آيس كريم", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-067.jpg", description:"براوني شوكولاتة مع كرة آيس كريم وصوص.", badge:null, available:true },
  { id:68, name:"آيس كريم فستق محمص", category:"desserts", categoryAr:"حلويات", price:28, oldPrice:null, image:"images/product-068.jpg", description:"آيس كريم فستق مع مكسرات وصوص.", badge:null, available:true },
  { id:69, name:"آيس كريم سنداي", category:"desserts", categoryAr:"حلويات", price:38, oldPrice:null, image:"images/product-069.jpg", description:"كأس آيس كريم مع كريمة ومكسرات وصوص.", badge:null, available:true },
  { id:70, name:"آيس كريم فانيلا كوب", category:"desserts", categoryAr:"حلويات", price:20, oldPrice:null, image:"images/product-070.jpg", description:"كرة آيس كريم فانيلا.", badge:null, available:true },
  { id:71, name:"بانانا سبليت", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-071.jpg", description:"بانانا سبليت مع آيس كريم وكريمة وصوص.", badge:null, available:true },
  { id:72, name:"آيس كريم فراولة", category:"desserts", categoryAr:"حلويات", price:22, oldPrice:null, image:"images/product-072.jpg", description:"آيس كريم فراولة طازج.", badge:null, available:true },
  { id:73, name:"أفوجاتو", category:"desserts", categoryAr:"حلويات", price:32, oldPrice:null, image:"images/product-073.jpg", description:"آيس كريم فانيلا مع إسبريسو ساخن وبسكويت.", badge:null, available:true },
  { id:74, name:"آيس كريم سنداي شوكولاتة", category:"desserts", categoryAr:"حلويات", price:42, oldPrice:null, image:"images/product-074.jpg", description:"كأس آيس كريم فاخر مع كريمة وصوص شوكولاتة.", badge:null, available:true },
  { id:75, name:"براوني طبقات", category:"desserts", categoryAr:"حلويات", price:50, oldPrice:null, image:"images/product-075.jpg", description:"طبقات براوني مع آيس كريم شوكولاتة وصوص.", badge:null, available:true },
  { id:76, name:"موخيتو فراولة", category:"drinks", categoryAr:"مشروبات", price:28, oldPrice:null, image:"images/product-076.jpg", description:"موخيتو فراولة ونعناع مثلج.", badge:null, available:true },
  { id:77, name:"بانانا سبليت كلاسيك", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-077.jpg", description:"موز مع آيس كريم وكريمة وصوص.", badge:null, available:true },
  { id:78, name:"عصير برتقال طازج", category:"drinks", categoryAr:"مشروبات", price:16, oldPrice:null, image:"images/product-078.jpg", description:"عصير برتقال طازج معصور.", badge:null, available:true },
  { id:79, name:"عصير فراولة", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-079.jpg", description:"عصير فراولة طازج.", badge:null, available:true },
  { id:80, name:"عصير بطيخ", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-080.jpg", description:"عصير بطيخ مثلج طازج.", badge:null, available:true },
  { id:81, name:"عصير برتقال", category:"drinks", categoryAr:"مشروبات", price:16, oldPrice:null, image:"images/product-081.jpg", description:"عصير برتقال طازج يُسكب أمامك.", badge:null, available:true },
  { id:82, name:"عصير باشن فروت", category:"drinks", categoryAr:"مشروبات", price:26, oldPrice:null, image:"images/product-082.jpg", description:"مشروب باشن فروت مع نعناع وليمون.", badge:null, available:true },
  { id:83, name:"ليمونادة بالنعناع", category:"drinks", categoryAr:"مشروبات", price:16, oldPrice:null, image:"images/product-083.jpg", description:"ليمونادة مثلجة مع نعناع وليمون.", badge:null, available:true },
  { id:84, name:"ميلك شيك فراولة", category:"drinks", categoryAr:"مشروبات", price:28, oldPrice:null, image:"images/product-084.jpg", description:"ميلك شيك فراولة مع كريمة وفراولة طازجة.", badge:null, available:true },
  { id:85, name:"هوت شوكليت", category:"drinks", categoryAr:"مشروبات", price:22, oldPrice:null, image:"images/product-085.jpg", description:"شوكولاتة ساخنة مع كريمة مخفوقة.", badge:null, available:true },
  { id:86, name:"ميلك شيك فانيلا", category:"drinks", categoryAr:"مشروبات", price:28, oldPrice:null, image:"images/product-086.jpg", description:"ميلك شيك فانيلا مع كريمة.", badge:null, available:true },
  { id:87, name:"ليمونادة بالنعناع", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-087.jpg", description:"ليمونادة طازجة مع نعناع.", badge:null, available:true },
  { id:88, name:"موخيتو باشن فروت", category:"drinks", categoryAr:"مشروبات", price:26, oldPrice:null, image:"images/product-088.jpg", description:"موخيتو باشن فروت مع نعناع.", badge:null, available:true },
  { id:89, name:"موخيتو فراولة", category:"drinks", categoryAr:"مشروبات", price:26, oldPrice:null, image:"images/product-089.jpg", description:"موخيتو فراولة ونعناع مثلج.", badge:null, available:true },
  { id:90, name:"ميلك شيك شوكولاتة", category:"drinks", categoryAr:"مشروبات", price:28, oldPrice:null, image:"images/product-090.jpg", description:"ميلك شيك شوكولاتة مع كريمة وصوص.", badge:null, available:true },
  { id:91, name:"ليمونادة كلاسيك", category:"drinks", categoryAr:"مشروبات", price:16, oldPrice:null, image:"images/product-091.jpg", description:"ليمونادة بقطع ليمون ونعناع.", badge:null, available:true },
  { id:92, name:"كابتشينو", category:"drinks", categoryAr:"مشروبات", price:18, oldPrice:null, image:"images/product-092.jpg", description:"كابتشينو مع رغوة حليب ورشة كاكاو.", badge:null, available:true },
  { id:93, name:"ميلك شيك لوتس", category:"drinks", categoryAr:"مشروبات", price:32, oldPrice:null, image:"images/product-093.jpg", description:"ميلك شيك بسكويت لوتس مع كريمة وكراميل.", badge:null, available:true },
  { id:94, name:"لاتيه آرت", category:"drinks", categoryAr:"مشروبات", price:20, oldPrice:null, image:"images/product-094.jpg", description:"لاتيه مع رسمة حليب فنية.", badge:null, available:true },
  { id:95, name:"إسبريسو", category:"drinks", categoryAr:"مشروبات", price:12, oldPrice:null, image:"images/product-095.jpg", description:"إسبريسو قوي في فنجان صغير.", badge:null, available:true },
  { id:96, name:"ساندويتش ديك رومي", category:"steaks", categoryAr:"ستيك ومشاوي", price:55, oldPrice:null, image:"images/product-096.jpg", description:"ساندويتش ديك رومي وخس وطماطم.", badge:null, available:true },
  { id:97, name:"بان كيك بالعسل", category:"breakfast", categoryAr:"إفطار", price:38, oldPrice:null, image:"images/product-097.jpg", description:"بان كيك طازج مع زبدة وعسل.", badge:null, available:true },
  { id:98, name:"كلوب ساندويتش", category:"steaks", categoryAr:"ستيك ومشاوي", price:65, oldPrice:null, image:"images/product-098.jpg", description:"كلوب ساندويتش دجاج مقلي مع بطاطس مقلية.", badge:null, available:true },
  { id:99, name:"فرنش توست", category:"breakfast", categoryAr:"إفطار", price:35, oldPrice:null, image:"images/product-099.jpg", description:"فرنش توست مع زبدة وسكر بودرة.", badge:null, available:true },
  { id:100, name:"إفطار إنجليزي", category:"breakfast", categoryAr:"إفطار", price:55, oldPrice:null, image:"images/product-100.jpg", description:"بيض مقلي ولحم مقدد وسجق وبطاطس وتوست.", badge:null, available:true },
  { id:101, name:"بان كيك عسل", category:"breakfast", categoryAr:"إفطار", price:36, oldPrice:null, image:"images/product-101.jpg", description:"بان كيك طازج مع عسل يُسكب أمامك.", badge:null, available:true },
  { id:102, name:"بيض بنديكت", category:"breakfast", categoryAr:"إفطار", price:48, oldPrice:null, image:"images/product-102.jpg", description:"بيض بنديكت مع صوص هولنديز ولحم.", badge:null, available:true },
  { id:103, name:"إفطار أمريكي", category:"breakfast", categoryAr:"إفطار", price:58, oldPrice:null, image:"images/product-103.jpg", description:"بيض ولحم مقدد وسجق وبطاطس وتوست.", badge:null, available:true },
  { id:104, name:"أومليت بالخضار", category:"breakfast", categoryAr:"إفطار", price:35, oldPrice:null, image:"images/product-104.jpg", description:"أومليت طازج مع خضار وسلطة وخبز.", badge:null, available:true },
  { id:105, name:"شكشوكة", category:"breakfast", categoryAr:"إفطار", price:32, oldPrice:null, image:"images/product-105.jpg", description:"شكشوكة في مقلاة حديد مع خبز عربي.", badge:null, available:true },
  { id:120, name:"مندي لحم", category:"eastern", categoryAr:"أطباق شرقية", price:95, oldPrice:null, image:"images/product-120.jpg", description:"مندي لحم مع أرز مبهر وبصل مقرمش.", badge:null, available:true },
  { id:130, name:"طاجن لحم بالبصل", category:"eastern", categoryAr:"أطباق شرقية", price:85, oldPrice:null, image:"images/product-130.jpg", description:"طاجن لحم مطهو ببطء مع بصل وصلصة.", badge:null, available:true },
  { id:140, name:"ساندويتش كفتة", category:"steaks", categoryAr:"ستيك ومشاوي", price:45, oldPrice:null, image:"images/product-140.jpg", description:"كفتة مشوية في خبز مع بقدونس وبصل.", badge:null, available:true },
  { id:150, name:"بطاطس مقلية", category:"appetizers", categoryAr:"مقبلات وخبز", price:22, oldPrice:null, image:"images/product-150.jpg", description:"بطاطس مقلية مقرمشة مع صوص.", badge:null, available:true },
  { id:160, name:"توموزوك ستيك", category:"steaks", categoryAr:"ستيك ومشاوي", price:220, oldPrice:null, image:"images/product-160.jpg", description:"ستيك توموزوك ضخم مع بطاطس وصلصات.", badge:"مميز", available:true },
  { id:170, name:"ستيك ريب آي", category:"steaks", categoryAr:"ستيك ومشاوي", price:185, oldPrice:null, image:"images/product-170.jpg", description:"ريب آي مشوي مع زبدة أعشاب وثوم.", badge:null, available:true },
  { id:180, name:"باييلا بحرية", category:"seafood", categoryAr:"مأكولات بحرية", price:160, oldPrice:null, image:"images/product-180.jpg", description:"باييلا إسبانية بالمأكولات البحرية.", badge:"مميز", available:true },
  { id:181, name:"روبيان بالثوم", category:"seafood", categoryAr:"مأكولات بحرية", price:95, oldPrice:null, image:"images/product-181.jpg", description:"روبيان سوتيه بالثوم والزيت الحار.", badge:null, available:true },
  { id:182, name:"روبيان مقلي", category:"seafood", categoryAr:"مأكولات بحرية", price:90, oldPrice:null, image:"images/product-182.jpg", description:"روبيان مقلي مقرمش مع صوص.", badge:null, available:true },
  { id:183, name:"روبيان تيمبورا", category:"seafood", categoryAr:"مأكولات بحرية", price:88, oldPrice:null, image:"images/product-183.jpg", description:"روبيان تيمبورا مع أرز وليمون.", badge:null, available:true },
  { id:184, name:"بيتزا دجاج باربيكيو", category:"pizzas", categoryAr:"بيتزا", price:75, oldPrice:null, image:"images/product-184.jpg", description:"بيتزا دجاج باربيكيو مع بصل أحمر وكزبرة.", badge:"جديد", available:true },
  { id:185, name:"بيتزا دجاج", category:"pizzas", categoryAr:"بيتزا", price:72, oldPrice:null, image:"images/product-185.jpg", description:"بيتزا دجاج مع جبنة وريحان وبصل.", badge:null, available:true },
  { id:187, name:"بيتزا خضار", category:"pizzas", categoryAr:"بيتزا", price:65, oldPrice:null, image:"images/product-187.jpg", description:"بيتزا خضار: كوسا، فطر، فلفل، وريحان.", badge:null, available:true },
  { id:188, name:"بيتزا أربع أجبان", category:"pizzas", categoryAr:"بيتزا", price:78, oldPrice:null, image:"images/product-188.jpg", description:"بيتزا أربع أجبان إيطالية على فرن حجري.", badge:"مميز", available:true },
  { id:189, name:"كالزوني", category:"pizzas", categoryAr:"بيتزا", price:70, oldPrice:null, image:"images/product-189.jpg", description:"كالزوني محشو جبنة ولحم من الفرن الحجري.", badge:null, available:true },
  { id:190, name:"فوكاتشا إكليل الجبل", category:"pizzas", categoryAr:"بيتزا", price:35, oldPrice:null, image:"images/product-190.jpg", description:"فوكاتشا طازجة مع إكليل الجبل وزيت زيتون.", badge:null, available:true },
  { id:192, name:"خبز ثوم بالجبن", category:"appetizers", categoryAr:"مقبلات وخبز", price:28, oldPrice:null, image:"images/product-192.jpg", description:"شرائح خبز ثوم مع جبنة ذائبة.", badge:null, available:true },
  { id:191, name:"بروفيترول شوكولاتة ساخن", category:"desserts", categoryAr:"حلويات", price:48, oldPrice:null, image:"images/product-191.jpg", description:"بروفيترول مع صوص شوكولاتة ساخن غزير.", badge:null, available:true },
  { id:195, name:"كعكة فستق", category:"desserts", categoryAr:"حلويات", price:45, oldPrice:null, image:"images/product-195.jpg", description:"كعكة فستق مع كريمة وفستق مجروش.", badge:null, available:true },
];

const CATEGORIES = [
  { id: "appetizers", name: "مقبلات وخبز", icon: "🥖" },
  { id: "pizzas", name: "بيتزا", icon: "🍕" },
  { id: "steaks", name: "ستيك ومشاوي", icon: "🥩" },
  { id: "seafood", name: "مأكولات بحرية", icon: "🦐" },
  { id: "eastern", name: "أطباق شرقية", icon: "🍲" },
  { id: "desserts", name: "حلويات", icon: "🍰" },
  { id: "breakfast", name: "إفطار", icon: "🍳" },
  { id: "drinks", name: "مشروبات", icon: "🥤" }
];

// ---------- STATE ----------
let cart = JSON.parse(localStorage.getItem("ff_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("ff_wishlist") || "[]");
let currentUser = JSON.parse(localStorage.getItem("ff_user") || "null");
let users = JSON.parse(localStorage.getItem("ff_users") || "[]");
let orders = JSON.parse(localStorage.getItem("ff_orders") || "[]");
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";
let modalQty = 1;
let orderType = "delivery";
let selectedTip = 10;
let paymentMethod = "card";

// ---------- THEME ----------
function initTheme() {
  const saved = localStorage.getItem("ff_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = saved === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("ff_theme", next);
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
  toast(next === "dark" ? "الوضع الداكن مفعّل" : "الوضع الفاتح مفعّل");
}


// ---------- HELPERS ----------
function saveCart() { localStorage.setItem("ff_cart", JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem("ff_wishlist", JSON.stringify(wishlist)); }
function saveUser() { localStorage.setItem("ff_user", JSON.stringify(currentUser)); }
function saveUsers() { localStorage.setItem("ff_users", JSON.stringify(users)); }
function saveOrders() { localStorage.setItem("ff_orders", JSON.stringify(orders)); }

function toast(msg, type = "") {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function formatPrice(n) {
  return n.toLocaleString("ar-SA") + " ر.س";
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = getProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

// ---------- RENDER CATEGORIES ----------

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  // Pick diverse images from products
  const picks = products.filter((_, i) => i % 3 === 0).slice(0, 12);
  grid.innerHTML = picks.map(p => `
    <div class="gallery-item" data-id="${p.id}" title="${p.name}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.style.display='none'" />
    </div>
  `).join("");
  grid.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openProductModal(+item.dataset.id));
  });
}

function renderCategories() {
  CATEGORIES.forEach(c => {
    c.count = products.filter(p => p.category === c.id).length;
  });
  const grid = document.getElementById("categories-grid");
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" data-category="${c.id}">
      <div class="category-icon">${c.icon}</div>
      <div class="category-name">${c.name}</div>
      <div class="category-count">${c.count} طبق</div>
    </div>
  `).join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      currentCategory = cat;
      document.querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.category === cat));
      document.querySelectorAll(".category-card").forEach(c => c.classList.toggle("active", c.dataset.category === cat));
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ---------- RENDER PRODUCTS ----------
function getFilteredProducts() {
  let list = [...products];
  if (currentCategory !== "all") {
    list = list.filter(p => p.category === currentCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.includes(searchQuery) ||
      p.description.includes(searchQuery) ||
      p.categoryAr.includes(searchQuery) ||
      p.name.toLowerCase().includes(q)
    );
  }
  if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (currentSort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "ar"));
  return list;
}

function renderProducts() {
  /* reveal products */
  const grid = document.getElementById("products-grid");
  const empty = document.getElementById("empty-state");
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = "";
  // Animate product cards
  requestAnimationFrame(() => {
    grid.querySelectorAll(".product-card").forEach((card, i) => {
      card.classList.add("reveal");
      setTimeout(() => card.classList.add("in"), 40 * Math.min(i, 12));
    });
  });
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list.map(p => {
    const inWish = wishlist.includes(p.id);
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/F5EDE3/C45C26?text=Fuoco'" />
          ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === "new" ? "جديد" : "خصم"}</span>` : ""}
          <button class="wishlist-toggle ${inWish ? "active" : ""}" data-id="${p.id}" aria-label="مفضلة">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWish ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="product-body">
          <div class="product-category">${p.categoryAr}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-footer">
            <div class="product-price">
              ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ""}
              ${formatPrice(p.price)}
            </div>
            <button class="add-btn" data-id="${p.id}" aria-label="أضف للسلة">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Events
  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".add-btn") || e.target.closest(".wishlist-toggle")) return;
      openProductModal(+card.dataset.id);
    });
  });
  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(+btn.dataset.id);
    });
  });
  grid.querySelectorAll(".wishlist-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(+btn.dataset.id);
    });
  });
}

// ---------- CART ----------
function addToCart(id, qty = 1) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  updateCartUI();
  toast("تمت الإضافة إلى السلة", "success");
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    saveCart();
    updateCartUI();
    renderCartItems();
  }
}

function updateCartUI() {
  const count = cartCount();
  const total = cartTotal();
  const badge = document.getElementById("cart-count");
  if (badge) {
    const prev = badge.textContent;
    badge.textContent = count;
    if (String(count) !== prev && count > 0) {
      badge.classList.remove("pulse");
      void badge.offsetWidth;
      badge.classList.add("pulse");
    }
  }
  const cartTotalEl = document.getElementById("cart-total");
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = count === 0;
  const clearBtn = document.getElementById("cart-clear");
  if (clearBtn) clearBtn.style.display = count === 0 ? "none" : "inline-block";

  // Mobile cart bar
  const bar = document.getElementById("mobile-cart-bar");
  const mcCount = document.getElementById("mc-count");
  const mcTotal = document.getElementById("mc-total");
  if (bar) {
    if (count > 0) {
      bar.classList.add("visible");
      bar.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-cart-bar");
    } else {
      bar.classList.remove("visible");
      bar.setAttribute("aria-hidden", "true");
      document.body.classList.remove("has-cart-bar");
    }
  }
  if (mcCount) mcCount.textContent = count === 1 ? "صنف واحد" : count + " أصناف";
  if (mcTotal) mcTotal.textContent = formatPrice(total);
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><p>سلتك فارغة</p><p style="font-size:0.85rem;margin-top:8px">أضف بعض الأطباق اللذيذة!</p></div>`;
    return;
  }
  container.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/70'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="cart-item-qty">
            <button data-id="${p.id}" class="qty-minus">−</button>
            <span>${item.qty}</span>
            <button data-id="${p.id}" class="qty-plus">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${p.id}">×</button>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".qty-minus").forEach(b => b.addEventListener("click", () => updateCartQty(+b.dataset.id, -1)));
  container.querySelectorAll(".qty-plus").forEach(b => b.addEventListener("click", () => updateCartQty(+b.dataset.id, 1)));
  container.querySelectorAll(".cart-item-remove").forEach(b => b.addEventListener("click", () => removeFromCart(+b.dataset.id)));
}

function openCart() {
  renderCartItems();
  document.getElementById("cart-overlay").hidden = false;
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-sidebar").classList.add("open");
}
function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-sidebar").classList.remove("open");
  setTimeout(() => { document.getElementById("cart-overlay").hidden = true; }, 250);
}

// ---------- WISHLIST ----------
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    toast("تمت الإزالة من المفضلة");
  } else {
    wishlist.push(id);
    toast("أُضيف إلى المفضلة", "success");
  }
  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

function openWishlist() {
  const container = document.getElementById("wishlist-items");
  if (wishlist.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:30px">لا توجد عناصر في المفضلة</p>`;
  } else {
    container.innerHTML = wishlist.map(id => {
      const p = getProduct(id);
      if (!p) return "";
      return `
        <div class="wishlist-item">
          <img src="${p.image}" alt="${p.name}" />
          <div class="wishlist-item-info">
            <div class="wishlist-item-name">${p.name}</div>
            <div class="wishlist-item-price">${formatPrice(p.price)}</div>
          </div>
          <button class="btn btn-primary" style="padding:8px 14px;font-size:0.8rem" data-id="${p.id}">أضف للسلة</button>
        </div>
      `;
    }).join("");
    container.querySelectorAll("button[data-id]").forEach(b => {
      b.addEventListener("click", () => {
        addToCart(+b.dataset.id);
        closeModal("wishlist-modal");
      });
    });
  }
  openModal("wishlist-modal");
}

// ---------- PRODUCT MODAL ----------
function openProductModal(id) {
  const p = getProduct(id);
  if (!p) return;
  modalQty = 1;
  const body = document.getElementById("product-modal-body");
  body.innerHTML = `
    <img class="product-modal-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/640x400/F5EDE3/C45C26?text=Fuoco'" />
    <div class="product-modal-content">
      <div class="product-category">${p.categoryAr}</div>
      <h2>${p.name}</h2>
      <p class="desc">${p.description}</p>
      <div class="modal-price-row">
        <div class="modal-price">${formatPrice(p.price)}</div>
        <div class="qty-control">
          <button class="qty-btn" id="modal-minus">−</button>
          <span class="qty-value" id="modal-qty">1</span>
          <button class="qty-btn" id="modal-plus">+</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-outline" id="modal-wish">${wishlist.includes(id) ? "♥ في المفضلة" : "♡ أضف للمفضلة"}</button>
        <button class="btn btn-primary" id="modal-add">أضف للسلة</button>
      </div>
    </div>
  `;
  document.getElementById("modal-minus").onclick = () => {
    if (modalQty > 1) { modalQty--; document.getElementById("modal-qty").textContent = modalQty; }
  };
  document.getElementById("modal-plus").onclick = () => {
    modalQty++; document.getElementById("modal-qty").textContent = modalQty;
  };
  document.getElementById("modal-add").onclick = () => {
    addToCart(id, modalQty);
    closeModal("product-modal");
  };
  document.getElementById("modal-wish").onclick = () => {
    toggleWishlist(id);
    document.getElementById("modal-wish").textContent = wishlist.includes(id) ? "♥ في المفضلة" : "♡ أضف للمفضلة";
  };
  openModal("product-modal");
}

// ---------- AUTH ----------
function openAuth() {
  const panel = document.getElementById("auth-user-panel");
  const loginForm = document.getElementById("login-form");
  const regForm = document.getElementById("register-form");
  const tabs = document.querySelector(".auth-tabs");

  if (currentUser) {
    panel.hidden = false;
    loginForm.hidden = true;
    regForm.hidden = true;
    tabs.hidden = true;
    document.getElementById("user-name").textContent = currentUser.name;
    document.getElementById("user-email").textContent = currentUser.email;
    document.getElementById("user-avatar").textContent = currentUser.name.charAt(0);
    document.getElementById("user-points").textContent = currentUser.points || 0;
  } else {
    panel.hidden = true;
    loginForm.hidden = false;
    regForm.hidden = true;
    tabs.hidden = false;
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === "login"));
  }
  openModal("auth-modal");
}

function updateAccountUI() {
  const label = document.getElementById("account-label");
  if (currentUser) {
    label.textContent = currentUser.name.split(" ")[0];
  } else {
    label.textContent = "دخول";
  }
}

// ---------- CHECKOUT / INNOVATIVE PAYMENT ----------
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  // Reset steps
  showCheckoutStep(1);
  orderType = "delivery";
  selectedTip = 10;
  paymentMethod = "card";
  document.querySelectorAll(".type-btn").forEach(b => b.classList.toggle("active", b.dataset.type === "delivery"));
  document.getElementById("address-group").hidden = false;
  document.getElementById("table-group").hidden = true;
  document.querySelectorAll(".tip-btn").forEach(b => b.classList.toggle("active", b.dataset.tip === "10"));
  document.getElementById("custom-tip").hidden = true;
  document.querySelector('input[name="payment"][value="card"]').checked = true;

  // Pre-fill phone if user
  if (currentUser && currentUser.phone) {
    document.getElementById("checkout-phone").value = currentUser.phone;
  }

  updateCheckoutSummary();
  const pts = currentUser ? (currentUser.points || 0) : 0;
  document.getElementById("available-points").textContent = pts;
  document.getElementById("use-points").checked = false;
  document.getElementById("use-points").disabled = pts < 50;

  openModal("checkout-modal");
}

function showCheckoutStep(n) {
  document.querySelectorAll(".checkout-step-content").forEach(el => el.hidden = true);
  document.getElementById("step-" + n).hidden = false;
  document.querySelectorAll(".checkout-steps .step").forEach(s => {
    const sn = +s.dataset.step;
    s.classList.toggle("active", sn === n);
    s.classList.toggle("done", sn < n);
  });
}

function updateCheckoutSummary() {
  const sub = cartTotal();
  let tip = selectedTip;
  if (selectedTip === "custom") {
    tip = parseFloat(document.getElementById("custom-tip").value) || 0;
  }
  let discount = 0;
  if (document.getElementById("use-points")?.checked && currentUser) {
    discount = Math.min(currentUser.points || 0, Math.floor(sub * 0.2)); // max 20% of subtotal
  }
  const total = sub + tip - discount;
  document.getElementById("sum-subtotal").textContent = formatPrice(sub);
  document.getElementById("sum-tip").textContent = formatPrice(tip);
  const discRow = document.getElementById("sum-discount-row");
  if (discount > 0) {
    discRow.hidden = false;
    document.getElementById("sum-discount").textContent = "−" + formatPrice(discount);
  } else {
    discRow.hidden = true;
  }
  document.getElementById("sum-total").textContent = formatPrice(Math.max(0, total));
  return { sub, tip, discount, total: Math.max(0, total) };
}

function confirmPayment() {
  const phone = document.getElementById("checkout-phone").value.trim();
  if (!phone) {
    toast("يرجى إدخال رقم الجوال", "error");
    showCheckoutStep(1);
    return;
  }
  if (orderType === "delivery") {
    const addr = document.getElementById("checkout-address").value.trim();
    if (!addr) {
      toast("يرجى إدخال عنوان التوصيل", "error");
      showCheckoutStep(1);
      return;
    }
  }
  if (orderType === "dinein") {
    const table = document.getElementById("table-number").value;
    if (!table) {
      toast("يرجى إدخال رقم الطاولة", "error");
      showCheckoutStep(1);
      return;
    }
  }

  const { sub, tip, discount, total } = updateCheckoutSummary();
  const orderId = "FD-" + Date.now().toString().slice(-6);
  const methodNames = {
    card: "بطاقة ائتمان / مدى",
    wallet: "محفظة رقمية",
    tableqr: "دفع الطاولة الذكي",
    cod: "الدفع عند الاستلام"
  };

  const order = {
    id: orderId,
    date: new Date().toLocaleString("ar-SA"),
    items: cart.map(i => {
      const p = getProduct(i.id);
      return { name: p?.name, qty: i.qty, price: p?.price };
    }),
    subtotal: sub,
    tip,
    discount,
    total,
    payment: methodNames[paymentMethod] || paymentMethod,
    orderType,
    phone,
    address: document.getElementById("checkout-address").value,
    table: document.getElementById("table-number").value,
    notes: document.getElementById("checkout-notes").value,
    status: "confirmed"
  };

  orders.unshift(order);
  saveOrders();

  // Loyalty points: 1 point per 10 SAR
  const earned = Math.floor(total / 10);
  if (currentUser) {
    currentUser.points = (currentUser.points || 0) - discount + earned;
    if (currentUser.points < 0) currentUser.points = 0;
    // Update in users array
    const uIdx = users.findIndex(u => u.email === currentUser.email);
    if (uIdx > -1) users[uIdx] = currentUser;
    saveUser();
    saveUsers();
  }

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Show confirmation
  document.getElementById("order-id").textContent = "#" + orderId;
  document.getElementById("earned-points").textContent = earned;

  const qrBox = document.getElementById("qr-display");
  if (paymentMethod === "tableqr" || orderType === "dinein") {
    qrBox.hidden = false;
    document.getElementById("fake-qr").textContent = orderId.slice(-4);
    document.getElementById("table-info").textContent = order.table ? `طاولة رقم ${order.table}` : "اعرض الرمز عند الوصول";
  } else {
    qrBox.hidden = true;
  }

  const eta = orderType === "dinein" ? "15–20 دقيقة" : orderType === "pickup" ? "20–30 دقيقة" : "30–45 دقيقة";
  document.getElementById("eta-time").textContent = eta;

  showCheckoutStep(3);
  toast("تم تأكيد الطلب بنجاح!", "success");
}

// ---------- ORDERS HISTORY ----------
function openOrders() {
  if (!currentUser) {
    toast("سجّل الدخول لعرض طلباتك", "error");
    openAuth();
    return;
  }
  const userOrders = orders.filter(o => o.phone === currentUser.phone || true); // simple: show all for demo
  const list = document.getElementById("orders-list");
  if (userOrders.length === 0) {
    list.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:30px">لا توجد طلبات سابقة</p>`;
  } else {
    list.innerHTML = userOrders.map(o => `
      <div class="order-card">
        <div class="order-card-header">
          <span class="order-id">#${o.id}</span>
          <span class="order-date">${o.date}</span>
        </div>
        <div class="order-items-preview">${o.items.map(i => i.name + " ×" + i.qty).join(" • ")}</div>
        <div style="display:flex;justify-content:space-between;margin-top:8px">
          <span style="font-size:0.85rem;color:var(--text-muted)">${o.payment}</span>
          <span class="order-total">${formatPrice(o.total)}</span>
        </div>
      </div>
    `).join("");
  }
  openModal("orders-modal");
}

// ---------- MODAL HELPERS ----------
function openModal(id) {
  const el = document.getElementById(id);
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add("open"));
}
function closeModal(id) {
  const el = document.getElementById(id);
  el.classList.remove("open");
  setTimeout(() => { el.hidden = true; }, 250);
}

// ---------- INIT EVENTS ----------
function initEvents() {
  // Header
  document.getElementById("cart-btn").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  document.getElementById("cart-clear")?.addEventListener("click", () => {
    if (cart.length === 0) return;
    if (confirm("هل تريد إفراغ السلة بالكامل؟")) {
      cart = [];
      saveCart();
      updateCartUI();
      renderCartItems();
      toast("تم إفراغ السلة");
    }
  });
  document.getElementById("wishlist-btn").addEventListener("click", openWishlist);
  document.getElementById("wishlist-close").addEventListener("click", () => closeModal("wishlist-modal"));
  document.getElementById("account-btn").addEventListener("click", openAuth);
  document.getElementById("auth-modal-close").addEventListener("click", () => closeModal("auth-modal"));
  document.getElementById("product-modal-close").addEventListener("click", () => closeModal("product-modal"));
  document.getElementById("checkout-close").addEventListener("click", () => closeModal("checkout-modal"));
  document.getElementById("orders-close").addEventListener("click", () => closeModal("orders-modal"));
  document.getElementById("footer-orders")?.addEventListener("click", (e) => { e.preventDefault(); openOrders(); });

  // Mobile menu
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.add("open");
  });
  document.getElementById("mobile-nav-close").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.remove("open");
  });
  document.querySelectorAll(".mobile-link").forEach(l => {
    l.addEventListener("click", () => document.getElementById("mobile-nav").classList.remove("open"));
  });

  // Search
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim();
    renderProducts();
  });
  document.getElementById("search-btn").addEventListener("click", () => {
    searchQuery = searchInput.value.trim();
    renderProducts();
  });

  // Filters
  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      currentCategory = pill.dataset.category;
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      document.querySelectorAll(".category-card").forEach(c => c.classList.toggle("active", c.dataset.category === currentCategory));
      renderProducts();
    });
  });
  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
  document.getElementById("reset-filters").addEventListener("click", () => {
    currentCategory = "all";
    searchQuery = "";
    currentSort = "default";
    searchInput.value = "";
    document.getElementById("sort-select").value = "default";
    document.querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
    renderProducts();
  });

  // Auth tabs
  document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("login-form").hidden = tab.dataset.tab !== "login";
      document.getElementById("register-form").hidden = tab.dataset.tab !== "register";
    });
  });

  // Login
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const pass = document.getElementById("login-password").value;
    const user = users.find(u => u.email === email && u.password === pass);
    if (!user) {
      toast("بيانات الدخول غير صحيحة", "error");
      return;
    }
    currentUser = { ...user };
    delete currentUser.password;
    saveUser();
    updateAccountUI();
    closeModal("auth-modal");
    toast("مرحبًا " + user.name + "!", "success");
  });

  // Register
  document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const pass = document.getElementById("reg-password").value;
    if (users.find(u => u.email === email)) {
      toast("هذا البريد مسجّل مسبقًا", "error");
      return;
    }
    const newUser = { name, email, password: pass, points: 50, phone: "" };
    users.push(newUser);
    saveUsers();
    currentUser = { name, email, points: 50, phone: "" };
    saveUser();
    updateAccountUI();
    closeModal("auth-modal");
    toast("تم إنشاء الحساب! حصلت على 50 نقطة ترحيبية", "success");
  });

  // Logout
  document.getElementById("logout-btn").addEventListener("click", () => {
    currentUser = null;
    saveUser();
    updateAccountUI();
    closeModal("auth-modal");
    toast("تم تسجيل الخروج");
  });

  document.getElementById("view-orders-btn").addEventListener("click", () => {
    closeModal("auth-modal");
    openOrders();
  });

  // Checkout
  document.getElementById("checkout-btn").addEventListener("click", openCheckout);

  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      orderType = btn.dataset.type;
      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("address-group").hidden = orderType !== "delivery";
      document.getElementById("table-group").hidden = orderType !== "dinein";
    });
  });

  document.getElementById("to-step-2").addEventListener("click", () => {
    const phone = document.getElementById("checkout-phone").value.trim();
    if (!phone) { toast("يرجى إدخال رقم الجوال", "error"); return; }
    if (orderType === "delivery" && !document.getElementById("checkout-address").value.trim()) {
      toast("يرجى إدخال العنوان", "error"); return;
    }
    if (orderType === "dinein" && !document.getElementById("table-number").value) {
      toast("يرجى إدخال رقم الطاولة", "error"); return;
    }
    showCheckoutStep(2);
    updateCheckoutSummary();
  });

  document.getElementById("back-to-1").addEventListener("click", () => showCheckoutStep(1));

  document.querySelectorAll('input[name="payment"]').forEach(r => {
    r.addEventListener("change", () => { paymentMethod = r.value; });
  });

  document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (btn.dataset.tip === "custom") {
        selectedTip = "custom";
        document.getElementById("custom-tip").hidden = false;
        document.getElementById("custom-tip").focus();
      } else {
        selectedTip = +btn.dataset.tip;
        document.getElementById("custom-tip").hidden = true;
      }
      updateCheckoutSummary();
    });
  });
  document.getElementById("custom-tip").addEventListener("input", updateCheckoutSummary);
  document.getElementById("use-points").addEventListener("change", updateCheckoutSummary);

  document.getElementById("confirm-pay").addEventListener("click", confirmPayment);
  document.getElementById("close-checkout").addEventListener("click", () => {
    closeModal("checkout-modal");
  });

  // Header scroll
  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 20);
  });

  // Close modals on overlay click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
}

// ---------- START ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const pills = document.getElementById("filter-pills");
  if (pills) {
    pills.innerHTML = `<button class="pill active" data-category="all">الكل</button>` +
      CATEGORIES.map(c => `<button class="pill" data-category="${c.id}">${c.name}</button>`).join("");
  }
  renderCategories();
  renderGallery();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  updateAccountUI();
  initEvents();
  initMobileUX();
});


// ---------- MOBILE CART BAR + SCROLL TOP + REVEAL ----------
function initMobileUX() {
  const mcOpen = document.getElementById("mc-open-cart");
  if (mcOpen) {
    mcOpen.addEventListener("click", () => {
      const cartBtn = document.getElementById("cart-btn");
      if (cartBtn) cartBtn.click();
    });
  }

  const scrollBtn = document.getElementById("scroll-top-btn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Reveal sections on scroll
  const reveals = document.querySelectorAll(
    ".section-header, .category-card, .product-card, .review-card, .loc-card, .stat-card, .gallery-item"
  );
  reveals.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  reveals.forEach(el => io.observe(el));

}


