---
id: version-1.0.0-ut_run
title: ut_run
original_id: ut_run
---

# UT_RUN






- [UT_RUN Function](#ut_run)












 
## UT_RUN Function<a name="ut_run"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_run(
  self in out nocopy ut_run,
  a_items                 ut_suite_items,
  a_run_paths             ut_varchar2_list := null,
  a_schema_names          ut_varchar2_rows := null,
  a_exclude_objects       ut_object_names := null,
  a_include_objects       ut_object_names := null,
  a_project_file_mappings ut_file_mappings := null,
  a_test_file_mappings    ut_file_mappings := null
) return self
```

 





 
