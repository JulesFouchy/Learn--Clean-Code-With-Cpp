---
title : Rule of 5
benefit: 4
easiness: 3
order: 4
tags:
    - C++
---

If yo have to do that, try to limit its scope. You most likely have only one member of your class that requires the destructor / move. Then, move that member into its own class that implements the rule of 5, and in your main class use that wrapper class and let the compiler generate the destructor / move / copy. It will prevent you from forgetting to copy a member in your copy / move, or something silly of that kind. Most classes shuldn't have complex destruction behaviour, and those wo do should be kept to a minimal size.