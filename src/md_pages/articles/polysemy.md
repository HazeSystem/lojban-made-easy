---
title: What is polysemy?
---

Lojban like most spoken languages doesn't fully reflect human sensation, first-hand experience. This can lead to problems in communicating almost everything and related consequences like confusion when you understand incorrectly people you are talking to etc.

One particular consequence of imperfection of such languages is polysemy.

A more tricky example is polysemy in referring to something. If in Lojban you say 

> **le pa mlatu**
> _The cat_

it must refer to what both the speaker and the listener must identify correctly otherwise they get miscommunication. 

What if there are two cats and each participant of the dialogue thinks of a different cat?

However, a more narrow sense of polysemy is when one and the same word can mean different things by definition.

Lojban uses the so called [type-3 fuhivla words](https://la-lojban.github.io/uncll/uncll-1.2.14/xhtml_section_chunks/section-fuhivla.html) that are able to differentiate words for which the source language (like English) uses the same word.

E.g. the word _spaghetti_ can mean:

1. pasta
2. electrical tubing
3. poorly structured computer code

The solution in Lojban would be **cidjrspageti** for _spaghetti_ denoting type of food where **cidj** is a prefix from **cidja** (meaning _food_).

There are a few issues with this solution:
* it's lengthy. Saying **spageti** would be much easier.
* it doesn't fully solve the issue because even spaghetti as food can have several narrow meanings:
	* pasta in the form of long strings
	* such pasta but served with tomato sauce
	* dish that has spaghetti as a main part of it, e.g. spaghetti bolognese
	* any type of pasta at all (this is definitely jargon but still)

Indeed, a polysemous word can have e.g. one wide meaning and many more specific ones. How do we solve such submeanings anyway?

One possible solution is to have domain-specific switches where you define a domain or narrow the meaning of necessary instances of a word.

E.g.

>**le spageti sei cidja**
>_the spaghetti (the food!)_
<!-- -->
>**le spageti sei skori**
>_the spaghetti (the cord!)_

and also define _spaghetti_ beforehand:
> **lo'e gunma be lo jarki nanba goi la spageti**
> _mass of narrow pieces of bread hereafter referred to as "Spaghetti"_
and use this **la spageti** afterwards.

The solution with **sei** is fast, can be made in-place but not as powerful as the second one. Compared to **cidjrspageti** it's less precise because **cidjrspageti** may have a precise dictionary definition.

All in all, there is nothing in the Lojban reference grammar book that would somehow forbid appearance of polysemous words. Some explanations above may hint that such limitation is not possible in principle.

<!-- ## Polysemy, homonymy, vagueness, ambiguity -->