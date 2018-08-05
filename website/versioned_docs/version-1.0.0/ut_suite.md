---
id: version-1.0.0-ut_suite
title: ut_suite
original_id: ut_suite
---

# UT_SUITE




- [Variables](#variables)

- [Exceptions](#exceptions)

- [UT_SUITE Function](#ut_suite)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
before_all_list | <pre>before_all_list ut_executables,;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
before_all_list | <pre>before_all_list ut_executables,;</pre> | 




 
## UT_SUITE Function<a name="ut_suite"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_suite (
  self in out nocopy ut_suite, a_object_owner varchar2, a_object_name varchar2, a_suite_name varchar2 := null
) return self
```

 





 
