---
id: version-1.0.0-ut_compound_data_value
title: ut_compound_data_value
original_id: ut_compound_data_value
---

# UT_COMPOUND_DATA_VALUE




- [Variables](#variables)

- [Exceptions](#exceptions)

- [GET_OBJECT_INFO Function](#get_object_info)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
else | <pre>else<br />  l_column := ':join_by_xpath pk_hash';</pre> | 
end | <pre>end if;</pre> | 
return | <pre>return l_column;</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>    l_other   := treat(a_other as ut_compound_data_value);</pre> | 
 | <pre>    l_diff_id := ut_compound_data_helper.get_hash(self.data_id||l_other.data_id);</pre> | 
 | <pre>    l_column_filter := ut_compound_data_helper.get_columns_filter(a_exclude_xpath, a_include_xpath);</pre> | 
else | <pre>else<br />  l_result := 1;</pre> | 
end | <pre>end if;</pre> | 
return | <pre>return l_result;</pre> | 
is_data_null | <pre>is_data_null   integer,;</pre> | 
elements_count | <pre>elements_count  integer,;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
else | <pre>else<br />  l_column := ':join_by_xpath pk_hash';</pre> | 
end | <pre>end if;</pre> | 
return | <pre>return l_column;</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>    l_other   := treat(a_other as ut_compound_data_value);</pre> | 
 | <pre>    l_diff_id := ut_compound_data_helper.get_hash(self.data_id||l_other.data_id);</pre> | 
 | <pre>    l_column_filter := ut_compound_data_helper.get_columns_filter(a_exclude_xpath, a_include_xpath);</pre> | 
else | <pre>else<br />  l_result := 1;</pre> | 
end | <pre>end if;</pre> | 
return | <pre>return l_result;</pre> | 
is_data_null | <pre>is_data_null   integer,;</pre> | 
elements_count | <pre>elements_count  integer,;</pre> | 




 
## GET_OBJECT_INFO Function<a name="get_object_info"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
overriding member function get_object_info return varchar2
```

 





 
