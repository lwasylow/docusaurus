---
id: ut_equal
title: ut_equal
---

# UT_EQUAL




- [Variables](#variables)

- [Exceptions](#exceptions)

- [INIT Procedure](#init)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
nulls_are_equal_flag | <pre>nulls_are_equal_flag number(1,0),;</pre> | 
exclude_list | <pre>exclude_list   ut_varchar2_list,;</pre> | 
include_list | <pre>include_list   ut_varchar2_list,;</pre> | 
is_unordered | <pre>is_unordered   number(1,0),;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
nulls_are_equal_flag | <pre>nulls_are_equal_flag number(1,0),;</pre> | 
exclude_list | <pre>exclude_list   ut_varchar2_list,;</pre> | 
include_list | <pre>include_list   ut_varchar2_list,;</pre> | 
is_unordered | <pre>is_unordered   number(1,0),;</pre> | 




 
## INIT Procedure<a name="init"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
member procedure init(self in out nocopy ut_equal, a_expected ut_data_value, a_nulls_are_equal boolean)
```

 





 
