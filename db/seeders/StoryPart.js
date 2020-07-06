'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('StoryParts', [
            {
                body: "At its face value, mutability is a simple concept. You may be familiar with the word mutation, which refers to a alteration (usually in DNA). Something that is mutable can be changed, while something that is immutable is unchanging and permanent.",
                userId: 1,
                storyId: 1,
                orderNo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                body: "To illustrate this concept, we'll begin with strings and arrays. We've spent some time with these two data types and by now we recognize that the two types share many similarities.",
                userId: 3,
                storyId: 1,
                orderNo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                body: "Both have indices, length, and even share common methods like slice.",
                userId: 1,
                storyId: 1,
                orderNo: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                body: "Since JavaScript is a single programming language, you may be wondering why there are any differences between Node.js and browsers in the first place. If they are in fact different, why wouldn't we classify them as different programming languages? The answer is complicated, but the key idea is this: even if we just consider browser environments, different browsers themselves can differ wildly because JavaScript is a specification.",
                userId: 8,
                storyId: 2,
                orderNo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                body: "During the rise of the World Wide Web in the 90s, companies competed for dominance (see The First Browser War). As Netscape's 'original' JavaScript language rose to prominence along with their browser, other browser companies needed to also support JavaScript to keep their users happy. Imagine if you could only visit pages as they were intended if you used a certain browser. ",
                userId: 5,
                storyId: 2,
                orderNo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                body: "What a horrible experience it would be (we're looking at you Internet Explorer)! As companies 'copied' Netscape's original implementation of JavaScript, they sometimes took creative liberty in adding their own features.",
                userId: 2,
                storyId: 2,
                orderNo: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {

                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nisl odio. Sed varius in neque ut sagittis. Praesent at dolor interdum, ullamcorper dolor nec, blandit augue. Sed lobortis quam erat, sed **vestibulum mi tempus sit amet. Curabitur nec magna in quam aliquam** ullamcorper. Vivamus vitae ornare felis. Aenean eget faucibus sapien. Nullam ante felis, maximus ac ullamcorper quis, tempus sed nisl. Ut condimentum malesuada dictum. Duis dapibus metus id eleifend fermentum. Sed imperdiet fermentum tellus vitae imperdiet. Phasellus vel viverra eros, at sollicitudin lectus. Curabitur nec suscipit nibh. Suspendisse vel semper elit. Praesent dignissim mi eleifend eros feugiat semper. Ut tincidunt ligula nulla, eu gravida massa elementum vitae.

Integer nec consequat turpis. Vivamus a tincidunt elit. Maecenas vitae faucibus est. Sed varius faucibus nunc. Integer fermentum erat orci, vitae viverra quam dictum in. Phasellus odio ex, sagittis ac lacinia non, interdum eget sapien. *Pellentesque rhoncus gravida diam, vel scelerisque diam hendrerit vitae. Integer ac metus blandit, maximus tellus a, maximus turpis*. Sed ac neque nec nulla scelerisque molestie eleifend et leo. In felis ante, efficitur eget ullamcorper id, accumsan laoreet risus. Donec laoreet egestas risus, non pellentesque odio pharetra quis. Quisque ac consequat velit, eget aliquam ipsum. Maecenas pretium tincidunt varius. Integer hendrerit convallis ante eget ullamcorper. Donec venenatis metus tellus, eu interdum dui tempus non. Pellentesque vestibulum massa ac efficitur convallis.`

                ,
                userId: 5,
                storyId: 3,
                orderNo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {

                body: `
> Nunc ultrices, lacus eu tempus auctor, ex nisi suscipit nisl, in
> maximus mauris urna vel turpis. Nam bibendum ac libero eget tincidunt.
> Maecenas a aliquam mi, eu eleifend urna. Sed euismod lacus nunc, sed
> porta purus consequat nec. Proin vitae purus vel tellus ultrices
> luctus. Phasellus et est posuere, mollis magna sit amet, porta orci.
> Vestibulum malesuada, odio eget consequat malesuada, augue erat
> tristique arcu, ut fringilla nunc urna id mauris. Morbi commodo non
> turpis at mattis. Etiam pharetra metus arcu, in ultricies enim
> tristique a. Ut urna nisi, lacinia at diam a, laoreet dictum arcu.

~~Curabitur et lorem id metus feugiat accumsan. Fusce malesuada feugiat malesuada. Suspendisse hendrerit volutpat tincidunt. Mauris hendrerit felis sed facilisis posuere. Aenean dui enim, gravida ut porta nec, cursus et eros. Vestibulum facilisis odio nisl, id volutpat erat molestie sit amet. Aenean turpis odio, ultrices a dui non, posuere convallis dolor. Quisque odio sapien, ullamcorper non commodo a, porttitor id neque. Vestibulum vestibulum elit nec tellus aliquet dictum ac at ex. Fusce id orci non lectus finibus pulvinar et in dolor. Nullam gravida lectus eget porta lobortis. Sed dictum, sem vel condimentum ullamcorper, sapien metus rutrum magna, in lacinia sem neque sit amet turpis. Nam ac molestie mi. Integer malesuada bibendum nunc at elementum.~~

Proin maximus, leo et venenatis iaculis, lectus quam lacinia odio, id tincidunt sapien leo eget erat. Aliquam mattis, metus eget viverra euismod, dui elit feugiat libero, nec elementum sapien est ac leo. Fusce purus mauris, efficitur id posuere nec, ultricies ut metus. Aliquam quis luctus enim, tempus commodo dolor. Praesent dictum placerat mauris, nec tincidunt dui efficitur in. Proin vitae feugiat orci. Mauris a condimentum nisl. Integer non nulla non lorem porta euismod. Praesent scelerisque vulputate orci, non laoreet ligula gravida sed. Suspendisse congue neque at erat blandit placerat.
`,
                userId: 1,
                storyId: 3,
                orderNo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {

                body: `## Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis lacinia dolor. Vestibulum finibus, ipsum id laoreet bibendum, velit mi gravida velit, et dapibus justo tellus non mi. Donec porttitor ullamcorper sodales. Vivamus at elit quis arcu vestibulum lobortis at sit amet mi. Curabitur tincidunt eros at ex accumsan, vel interdum urna pretium. Proin dapibus malesuada erat, vitae congue dolor tristique non. Nam cursus eget felis id dignissim. Nam sagittis augue a tellus facilisis tristique. Nulla id ipsum mi. Morbi enim erat, pellentesque nec ornare a, aliquet eget neque. Vestibulum tempus, nunc eget imperdiet sagittis, mi justo fermentum nisi, sit amet accumsan sapien sem non ipsum.

 1. Nunc sit amet ex felis. Donec hendrerit nisi eget orci luctus, sit
 2. amet mattis velit blandit. Fusce id felis id eros tincidunt rhoncus.
 3. Phasellus at nunc leo. Sed nec augue urna. Ut a sodales magna, vitae
 4. tempor felis. Nullam nunc arcu, lobortis non condimentum eu,
 5. pulvinar at quam. Aenean interdum tortor quis justo viverra, id
 6. facilisis justo interdum.



`,
                userId: 5,
                storyId: 4,
                orderNo: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {

                body: `

Pellentesque ac pretium est, et laoreet nulla. Praesent fringilla tortor

 - facilisis pellentesque lacinia. Vestibulum sodales, ligula ut
 - condimentum scelerisque, ligula justo commodo velit, a
 - condimentum
 - sapien ipsum a est. Pellentesque dapibus dictum bibendum. Duis
 - tempor
 - non massa in sodales. Morbi at efficitur mauris. Aenean malesuada
 - justo ac diam consequat, at placerat risus sagittis. Donec blandit
 - pulvinar interdum. Mauris commodo vehicula tempus. Donec
 - bibendum
 - sapien sit amet sapien interdum, vitae pretium libero feugiat. Donec
 - tempor accumsan finibus. Ut non est sit amet eros gravida pharetra a
 - sed diam. Integer nec mauris et dolor commodo molestie.

 [x] Praesent maximus tincidunt tincidunt. Suspendisse egestas
       tincidunt mi eget auctor. Nunc ipsum metus, elementum eu ligula
       sit amet, vehicula rhoncus turpis. Sed eu enim tempus neque
       suscipit blandit. Etiam tincidunt velit mi. In a pretium odio. Ut
       eget sem ut sapien tincidunt viverra id at sapien. Pellentesque
       fermentum placerat finibus. Sed fringilla venenatis tellus sed
       egestas. Orci varius natoque penatibus et magnis dis parturient
       montes, nascetur ridiculus mus. Nam viverra nulla aliquet,
       egestas sem sed, convallis mi.

`,
                userId: 1,
                storyId: 4,
                orderNo: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('StoryParts', null, {});
    }
};
